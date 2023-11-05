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
import { initIsLogin } from "./store";
import { useDispatch } from "react-redux";
import Category from "./pages/Category";
import Place from "./pages/Place";

// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Today from "./pages/Random";
import "./App.scss";


function App() {  
  let dispatch = useDispatch();

  useEffect(()=>{
    let isLogin
    console.log(localStorage.getItem("isLogin"));
    if (localStorage.getItem("isLogin") == "true"){
      isLogin = true
    } else {
      isLogin = false
    }
    dispatch((initIsLogin(isLogin)))
  })
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
        <Route path="/category" element={
          <>
            <Place />
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
      .get("/abc")
      .then((result) => { console.log(result) })
      .catch(() => {});
  });
  return <div>상세 페이지</div>;
  
}

export default App;
