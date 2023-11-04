import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import navericon from '../imgs/naver-login.png';
import kakaoicon from '../imgs/kakao-login.png';


function Login() {
    let navigate = useNavigate();

    return (
        <div id="login" className="first center">
            <form class="form-box" action="/login" method="POST">
                <h2>Login</h2>

                <input name="id" placeholder="id"/>
                <input name="password" placeholder="password" type="password"/>

                <button className="login" type="submit">Login</button>
                <button onClick={() => { navigate("/join") }}class="join">Join</button>

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