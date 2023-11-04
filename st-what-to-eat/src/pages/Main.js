import React, { memo, useState } from "react";
import { useEffect } from "react";
import memoji from '../imgs/memoji.gif';

// react-bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.scss";

function Main() {
    let [up0, setUp0] = useState('')
    let [up1, setUp1] = useState('')
    let [up2, setUp2] = useState('')

    useEffect(() => {
        setTimeout(() => { setUp0('up') }, 100)
        setTimeout(() => { setUp1('up') }, 500)
        setTimeout(() => { setUp2('up') }, 1000)

        return () => {
            setUp0('')
            setUp1('')
            setUp2('')
        }
    }, [])

    return(
        <div className="first main">
            <div className="title">
                <div className={"bottom " + up1}>과기대에서</div>
                <div className={"bottom " + up2}>오늘🍔</div>
                <div className={"bottom " + up2}>뭐 먹지?</div>
                <img className={"bottom " + up0} src={memoji}></img>
            </div>
        </div>
    )
}

export default Main;