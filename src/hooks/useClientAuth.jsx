import { useState, useEffect, createContext, useContext } from "react";
import axios from "../api/axios";

const ClientAuthContext = createContext(null);

export const ClientAuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("clientToken") || null);
  const [client, setClient] = useState(() => {
    try {
      const stored = localStorage.getItem("clientInfo");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = (newToken, clientData) => {
    setToken(newToken);
    setClient(clientData);
    localStorage.setItem("clientToken", newToken);
    localStorage.setItem("clientInfo", JSON.stringify(clientData));
  };

  const logout = () => {
    setToken(null);
    setClient(null);
    localStorage.removeItem("clientToken");
    localStorage.removeItem("clientInfo");
  };

  const axiosClient = axios.create({
    baseURL: axios.defaults.baseURL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  });

  return (
    <ClientAuthContext.Provider value={{ token, client, login, logout, axiosClient }}>
      {children}
    </ClientAuthContext.Provider>
  );
};

export const useClientAuth = () => {
  return useContext(ClientAuthContext);
};
