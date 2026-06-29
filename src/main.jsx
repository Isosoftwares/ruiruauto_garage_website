import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "animate.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./context/sidenav-context";
import { HelmetProvider } from "react-helmet-async";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <MantineProvider>
          <ThemeProvider>
            <MaterialTailwindControllerProvider>
              <AuthProvider>
                <Routes>
                  <Route path="/*" element={<App />} />
                </Routes>
              </AuthProvider>
            </MaterialTailwindControllerProvider>
          </ThemeProvider>
        </MantineProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
