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
import { initIsLogin, sortRecommend } from "./store";
import Category from "./pages/Category";
import Place from "./pages/Place";
import { Row, Col } from "react-bootstrap";
import Test from "./pages/Test";

// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Like from "./pages/Like";
import Random from "./pages/Random";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { initPlaces } from "./store";


function App() {  
  let dispatch = useDispatch();

  useEffect(()=>{
    let isLogin
    if (localStorage.getItem("isLogin") == "true"){
      isLogin = true
    } else {
      isLogin = false
    }
    dispatch((initIsLogin(isLogin)))
  })

 

  useEffect(()=>{
    axios.get('/place').then((res)=>{
      dispatch(initPlaces(res.data))
    }, [])
  })

  let places = useSelector((state) => { return state.places });

  return (
    <div className="App">
      {/* 음식점 업로드용
      <ImgUpload></ImgUpload>
      {
        places.slice(0).reverse().map(function(a){
          
          return <Test data={a}/>
        })
      } */}
      

      <MainNav />

      

      <Routes>
        <Route path="/" element={
            <>
            <Main />
            <Best5 />
            <Row>
                <Col md={6}>
                  <Random />
                </Col>
              <Col md={6}>
                <Like/>
              </Col>
              </Row>
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
            <Category></Category>
          </>
        } />

        {/* <Route path="/test" element={
          <div>
            <ImgUpload></ImgUpload>
            {
              places.slice(0).reverse().map(function (a) {
                return <Test data={a} />
              })
            }
          </div>
        }></Route> */}
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
