import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Users from "./views/Users";
import NoMatch from "./views/NoMatch";
import Layout from "./layout/Layout";
import User from "./views/User";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admins from "./views/Admins";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={"home"} element={<Home />} />

        {/* protection lvl 1 */}
        <Route
          path={"users"}
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path={"users/:id"}
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />

        {/* protection lvl 2 */}
        <Route
          path={"admins"}
          element={
            <ProtectedRoute
              isAllowed={user?.roles.includes("admin")}
              redirectPath={"/users"}
            >
              <Admins />
            </ProtectedRoute>
          }
        />

        <Route path={"*"} element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
