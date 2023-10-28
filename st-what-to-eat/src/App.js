import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import MainNav from "./components/MainNav";

// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <MainNav />
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
