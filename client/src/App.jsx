import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/landing";
import Home from "./views/home";
import Error404 from "./views/error404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
