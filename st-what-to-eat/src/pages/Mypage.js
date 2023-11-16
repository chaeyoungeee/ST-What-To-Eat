import { useEffect } from "react";
import Grid from "../components/Grid";
import { useState } from "react";
import axios from 'axios';


function Mypage() {
    let [likes, setLikes] = useState(null);
    useEffect(()=>{
        axios.get('/mypage').then((response)=>{
            setLikes(response.data)
            console.log(response.data)
        })
    }, [])

    if (likes == undefined) return (<></>)
    return (
        <div id="mypage" className="first">
            {console.log(likes)}
            <div className="title-pd">
                <h1>🥰</h1>
                <h3 className="title">Mypage</h3>
            </div>
            <Grid places={likes}></Grid>
        </div>
    )
}

export default Mypage;