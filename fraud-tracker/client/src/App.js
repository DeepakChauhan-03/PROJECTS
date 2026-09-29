import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrapPage from "./TrapPage";
import AdminDashboard from "./AdminDashboard";
import CreateLink from "./CreateLink";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is the page a fraudster actually opens */}
        <Route path="/t/:linkId" element={<TrapPage />} />
        {/* Investigator side */}
        <Route path="/" element={<CreateLink />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
