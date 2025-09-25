// frontend/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Backend API URL from environment or default
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  // Axios instance with cookies enabled
  const api = axios.create({ baseURL: API, withCredentials: true });

  // Fetch current logged-in user
  const fetchMe = async () => {
    try {
      const res = await api.get("/api/auth/me");
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  // LOGIN function
  const login = async (email, password) => {
    try {
      const res = await api.post("/api/auth/login", { email, password });
      setUser(res.data.user);
      return res.data.user;
    } catch (err) {
      // Handle backend errors
      const message = err.response?.data?.message || "Login failed";
      throw new Error(message);
    }
  };

  // REGISTER function
  const register = async (payload) => {
    try {
      const res = await api.post("/api/auth/register", payload);
      setUser(res.data.user);
      return res.data.user;
    } catch (err) {
      const message = err.response?.data?.message || "Registration failed";
      throw new Error(message);
    }
  };

  // LOGOUT function
  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
      setUser(null);
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, login, register, logout, api }}
    >
      {children}
    </AuthContext.Provider>
  );
};
