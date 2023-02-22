import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App.jsx";
import Destination from '../components/destination/Destination';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Destination/:destinationId" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
