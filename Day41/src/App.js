import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Navbar from "./Layout/Header/Navbar";
import Setting from "./Pages/Setting";
import Google from "./Pages/Google";
import About from "./Pages/About";
import Advertising from "./Pages/Advertising";
import Business from "./Pages/Business";
import HowSearchWorks from "./Pages/HowSearchWorks";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import NoMatch from "./Pages/NoMatch";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import UseAuth from "./Hooks/UseAuth";
import ProtectedRoute from "./Routes/ProtectedRoute";
import "./App.css";

function App() {
  const { user } = UseAuth();
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Google />} />

          {/* 2. React Auth */}
          <Route path="google" element={<Google />} />

          {/* 1. Continue at REACT ROUTER: DYNAMIC AND NESTED ROUTES  */}
          <Route
            path="about"
            element={
              // 3. protectedroute after Auth
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          >
            {/* <Route path={`:userId`} element={<User />} /> */}
          </Route>
          {/* change to this to prevent About component to be used */}
          {/* the :userId, especially : is important based on useparam*/}
          <Route
            path={`about/:userId`}
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute
                isAllowed={user?.role.includes("admin")}
                redirectPath={"/about"}
              >
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path={`admin/:userId`}
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />

          <Route path="advertising" element={<Advertising />} />
          <Route path="business" element={<Business />} />
          <Route path="how-search-works" element={<HowSearchWorks />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
