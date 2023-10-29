import React, { memo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import MainNav from "./components/MainNav";
import Main from "./pages/Main";
import { motion } from "framer-motion";

// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.scss";

function App() {
  return (
    <div className="App">
      <MainNav />
      <Main />

    </div>
    
  );
}

function Detail() {
  useEffect(() => {
    axios
      .get("/api/place")
      .then((result) => {})
      .catch(() => {});
  });
  return <div>상세 페이지</div>;
  
}

export default App;
