import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import React from "react";

function Router() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
