import { useEffect } from 'react';
import Grid from '../components/Grid';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Mypage() {
    let [fade, setFade] = useState('');
    let navigate = useNavigate();

    let [likes, setLikes] = useState(null);
    useEffect(() => {
        axios
            .get('/mypage')
            .then((response) => {
                setLikes(response.data);
            })
            .catch((error) => {
                navigate('/login');
            });

        setTimeout(() => {
            setFade('end');
        }, 300);
        return () => {
            setFade('');
        };
    }, []);

    if (likes == undefined)
        return (
            <div className="first loading">
                <div className={'start ' + fade}></div>
            </div>
        );

    return (
        <div id="mypage" className="first">
            <div className={'start ' + fade}>
                <div className="title-pd">
                    <h1>💁🏻</h1>
                    <h3 className="title">Mypage</h3>
                </div>
                <Grid setLikes={setLikes} places={likes} mypage={true}></Grid>
            </div>
        </div>
    );
}

export default Mypage;
