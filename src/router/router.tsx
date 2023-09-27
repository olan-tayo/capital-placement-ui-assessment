import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Group from "../pages/Group/group";

const Approuter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/group" element={<Group />}></Route>
    </Routes>
  );
};

export default Approuter;
