import { useEffect } from 'react';
import Grid from '../components/Grid';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Mypage() {
    let [fade, setFade] = useState('');
    let navigate = useNavigate();

    let [likes, setLikes] = useState(null);
    let [nickname, setNickname] = useState('');
    useEffect(() => {
        axios
            .get('/mypage')
            .then((response) => {
                setLikes(response.data.reverse());
            })
            .catch((error) => {
                console.log(error)
                navigate('/login');
            });

        axios.get('/user').then((response) => {
            setNickname(response.data.nickname);
        }).catch((error)=>{
            console.log();
        });

        setTimeout(() => {
            setFade('end');
        }, 300);
        return () => {
            setFade('');
        };
    }, []);

    return (
        <div id="mypage" className="first">
            <div className={'start ' + fade}>
                <div className="title-pd">
                    <h1>💁🏻</h1>
                    <h3 className="title">Mypage</h3>
                    <p>{nickname}님이 즐겨찾기 하신 음식점입니다.</p>
                </div>
                <Grid setLikes={setLikes} places={likes} mypage={true}></Grid>
            </div>
        </div>
    );
}

export default Mypage;
