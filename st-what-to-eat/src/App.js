import React, { memo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import MainNav from "./components/MainNav";
import Main from "./pages/Main";
import { motion } from "framer-motion";
import PlaceCard from "./components/PlaceCard";
import Best5 from "./pages/Best5";
import Footer from "./components/Footer";
import { useScroll } from "framer-motion";
import ImgUpload from "./components/ImgUpload";
import MapNaverDefault from "./components/MapNaverDefault";
import Login from "./pages/Login"
import Join from "./pages/Join"

// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Today from "./pages/Random";
import "./App.scss";


function App() {  

  return (
    <div className="App">
      <MainNav />
      {/* <ImgUpload></ImgUpload> */}
      {/* <MapNaverDefault></MapNaverDefault> */}
      <Routes>
        <Route path="/" element={
            <>
              <Main />
              <Today />
              <Best5 />
            </>
        }/>
        <Route path="/login" element={
          <>
            <Login></Login>
          </>
        } />
        <Route path="/join" element={
          <>
            <Join></Join>
          </>
        } />
      </Routes>
      
      <Footer />
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
