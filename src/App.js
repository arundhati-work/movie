import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./routes/Gallery";
import Description from "./routes/Description";

import Booking from "./routes/Booking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
