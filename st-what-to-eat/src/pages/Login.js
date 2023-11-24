import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import navericon from '../imgs/naver-login.png';
import kakaoicon from '../imgs/kakao-login.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setIsLogin } from '../store';
import { useDispatch } from 'react-redux';

function Login() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({ username: '', password: '' });

    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 300);

        return () => {
            setFade('');
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
  
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        await axios
            .post('/login', {
                username: formData.username,
                password: formData.password,
            })
            .then((response) => {
                dispatch(setIsLogin(true));
                alert(response.data.nickname + '님 환영합니다.');
                navigate('/');
            })
            .catch((error) => {
                setErrorMessage(error.response.data);
            });
    };

    return (
        <div id="login" className="first center">
            <form onSubmit={handleLogin} className={'form-box start ' + fade} action="/login" method="POST">
                <h2>Login</h2>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="id"
                />
                <input
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="password"
                    type="password"
                />

                <button className="login" type="submit">
                    Login
                </button>

                <button
                    onClick={() => {
                        navigate('/join');
                    }}
                    class="join"
                >
                    Join
                </button>
                <p>{errorMessage}</p>

                {/* <Row className="social-login">
                    <Col xs={4}></Col>
                    <Col xs={2}>
                        <img src={navericon}></img>
                    </Col>
                    <Col xs={2}>
                        <img src={kakaoicon}></img>
                    </Col>
                    <Col xs={4}></Col>
                </Row> */}
            </form>
        </div>
    );
}

export default Login;
