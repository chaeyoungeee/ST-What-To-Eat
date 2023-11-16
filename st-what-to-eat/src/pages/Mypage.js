import { useEffect } from "react";
import Grid from "../components/Grid";
import { useState } from "react";
import axios from 'axios';


function Mypage() {
    let [fade, setFade] = useState('')


    let [likes, setLikes] = useState(null);
    useEffect(()=>{
        axios.get('/mypage').then((response)=>{
            setLikes(response.data)
            console.log(response.data)
        })

        setTimeout(() => { setFade('end') }, 300)
        return () => {
            setFade('')
        }
    }, [])

    if (likes == undefined) return (<div className="first loading">
        <div className={"start " + fade}></div>
    </div>)

    return (
        <div id="mypage" className="first">
            <div className={"start " + fade}>
            <div className="title-pd">
                <h1>🥰</h1>
                <h3 className="title">Mypage</h3>
            </div>
            <Grid setLikes={setLikes} places={likes} mypage={true}></Grid>
            </div>
        </div>
    )
}

export default Mypage;