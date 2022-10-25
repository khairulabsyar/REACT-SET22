import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Google, About, NoMatch, Admin, Universities } from "./Layout/Pages";
import UseAuth from "./Hooks/UseAuth";
import ProtectedRoute from "./Routes/ProtectedRoute";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { user } = UseAuth();

  // check why cant work
  const { name, email } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const setName = (name) => dispatch({ type: "SET_NAME", payload: name });
  const setEmail = (email) => dispatch({ type: "SET_EMAIL", payload: email });

  useEffect(() => {
    setName("Absyar");
    //
    setEmail("Khairul@absyar.com");
  }, []);

  return (
    <>
      {/* <h1>
        {name}
        {email}
      </h1> */}
      <Routes>
        <Route element={<Layout />}>
          {/* Default */}
          <Route index element={<Google />} />

          {/* Search */}
          <Route path="google" element={<Google />} />

          {/* About */}
          <Route
            path="about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          ></Route>

          {/* Not Protected */}
          <Route path="universities" element={<Universities />}></Route>

          {/* Once Log In */}
          <Route
            path="profile"
            element={
              <ProtectedRoute
                isAllowed={user?.role.includes("admin")}
                redirectPath={"/about"}
              >
                <Admin />
              </ProtectedRoute>
            }
          />

          {/* Error URL */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
