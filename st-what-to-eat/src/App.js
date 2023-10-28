import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import "./App.scss";

// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
    </div>
  );
}

function Detail() {
  useEffect(() => {
    axios
      .get("/api/place")
      .then((result) => {
      })
      .catch(() => {});
  });
  return <div>상세 페이지</div>;
}

export default App;
