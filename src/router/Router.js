import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App.jsx";
import Destination from "../components/destination/Destination";
import Home from "../components/home/Home";
import Technology from "../components/technology/Technology.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Destination/:destinationId" element={<Destination />} />
          {/* aqui las demas rutas*/}
          <Route path="Technology/" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
