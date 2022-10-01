import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Layout from "../Layout/Layout";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
};

export default index;
