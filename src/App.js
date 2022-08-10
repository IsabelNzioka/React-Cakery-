import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import Cakes from "./components/Cakes/Cakes";

import Layout from "./hoc/Layout/Layout";

const App = () => {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cakes" element={<Cakes />}></Route>
    </Routes>
  );
  return (
    <div className="App">
      {/* <Home /> */}
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;
