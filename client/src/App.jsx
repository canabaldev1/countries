import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Error404 from "./Views/Error404/Error404";
import Detail from "./Views/Detail/Detail";
import Activities from "./Views/Activities/Activities";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
