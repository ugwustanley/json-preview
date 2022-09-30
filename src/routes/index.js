import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import Board from "../components/Board/Board";
import BoardTwo from "../components/PreviewBoard/PreviewBoard";
import View from "../components/View/View";
import Layout from "../Layout/Layout";

const index = () => {
  return (
    <Routes>
      <Route path="/board" element={<Board />} />
      <Route path="/board2" element={<BoardTwo />} />
      <Route
        path="/"
        element={
          <Layout>
            <View />
          </Layout>
        }
      />
    </Routes>
  );
};

export default index;
