import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/detail" element={<Detail></Detail>} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
      </Routes>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/place">어바웃페이지</Link>
    </div>
  );
}

function Detail() {
  useEffect(() => {
    axios
      .get("/api/place")
      .then((결과) => {
        console.log(결과);
      })
      .catch(() => {});
  });
  return <div>상세 페이지</div>;
}

export default App;
