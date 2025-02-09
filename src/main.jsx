import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import ProfilePage from "./Pages/Profile";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/My-Profile">
      <Routes>
        <Route path="/" element={<Navigate to="/profile" replace />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
