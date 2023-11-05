import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import navericon from '../imgs/naver-login.png';
import kakaoicon from '../imgs/kakao-login.png';
import { useState } from "react";
import axios from 'axios';


function Login() {
    let navigate = useNavigate();
    const [loginMessage, setLoginMessage] = useState('');
    const [formData, setFormData] = useState({ username: '', password: '' });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleLogin = async (e) => {
        e.preventDefault();

            await axios.post('/login', {
                    username: formData.username,
                    password: formData.password
            }).then(()=>{
                navigate('/')
            }
            ).catch((error)=>{
                setLoginMessage(error.response.data);
            }
            )
    }

    return (
        <div id="login" className="first center">
            <form onSubmit={handleLogin} className="form-box" action="/login" method="POST">
                <h2>Login</h2>

                <input type="text" name="username" value={formData.username}
                    onChange={handleInputChange} placeholder="username"/>
                <input name="password" value={formData.password}
                    onChange={handleInputChange} placeholder="password" type="password"/>

                <button type="submit">Login</button>
                { console.log(formData) }

                <button onClick={() => { navigate("/join") }}class="join">Join</button>
                <p>{loginMessage}</p>

                <Row className="social-login">
                    <Col xs={4}></Col>
                    <Col xs={2}>
                        <img src={navericon}></img>
                    </Col>
                    <Col xs={2}>
                        <img src={kakaoicon}></img>
                    </Col>
                    <Col xs={4}></Col>
                </Row>
            </form> 



        </div>
    )
}

export default Login;