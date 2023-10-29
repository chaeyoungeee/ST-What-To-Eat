import React, { memo, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import memoji from './imgs/memoji.gif';
import MainNav from "./components/MainNav";

// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.scss";

function App() {
  let [up0, setUp0] = useState('')
  let [up1, setUp1] = useState('')
  let [up2, setUp2] = useState('')
  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setUp0('up')}, 100)
    setTimeout(()=>{ setUp1('up')}, 500)
    setTimeout(()=>{ setUp2('up')}, 1000)
    setTimeout(()=>{ setFade('end')}, 1500)

    return ()=>{
      setUp0('')
      setUp1('')
      setUp2('')
      setFade('')
    }
  }, [])
  return (
    <div className="App">
      <div className={"start "+ fade}><MainNav /></div>
      <div className="main">
          <div className="title">
            <div className={"bottom "+ up1}>과기대에서</div>
            <div className={"bottom "+ up2}>오늘</div>
            <div className={"bottom "+ up2}>뭐 먹지?</div>
            <img className={"bottom " + up0} src={memoji}></img>
          </div>
          
      </div>
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
