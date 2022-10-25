import React, { useState } from "react";
import AuthContext from "../Context/AuthContext";
import Auth from "../Components/Auth";
import { useNavigate } from "react-router-dom";

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = async () => {
    const { _token, _user } = await Auth();
    if (_token && _user) {
      setToken(_token);
      setUser(_user);
      navigate("/about");
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
