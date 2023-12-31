import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../App.scss';

import { PiBowlFood } from 'react-icons/pi';
import { FiAward } from 'react-icons/fi';
import { BiCategoryAlt, BiHeart } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setIsLogin } from '../store';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MainNav() {
    let isLogin = useSelector((state) => {
        return state.isLogin;
    });
    const [br, setBr] = useState('');
    const [visible2, setVisible2] = useState('hidden');
    const dispatch = useDispatch();
    const handleToggle = (e) => {
        console.log(window.innerWidth);
        setVisible2('');
    };
    const handleMenuClick = () => {
        console.log(window.innerWidth);
        setVisible2('hidden');
    };

    useEffect(() => {
        axios
            .get('/user')
            .then((response) => {
                dispatch(setIsLogin(true));
            })
            .catch((error) => {
                dispatch(setIsLogin(false));
            });
    }, []);

    let navigate = useNavigate();
    const handleLogout = async () => {
        await axios.get('/logout').then((response) => {
            dispatch(setIsLogin(false));
            alert('로그아웃 성공');
        });
    };

    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState(location.pathname);

    useEffect(() => {
        setCurrentUrl(location.pathname);
        if (location.pathname == '/best' || location.pathname == '/randomlike') {
            setBr('br');
        } else {
            setBr('');
        }
    }, [location.pathname]);

    return (
        <Navbar id="navbar" expand="md" className={`bg-body-tertiary ${br}`}>
            <Container>
                <motion.div whileHover={{ scale: 1.3 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                    <Navbar.Brand
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        🤔
                    </Navbar.Brand>
                </motion.div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Navbar.Collapse className={`${visible2}`} id="basic-navbar-nav">
                    <Nav className="main-bar" onClick={handleMenuClick}>
                        {currentUrl == '/' ? (
                            <Nav.Link href="#best">
                                <FiAward className="menu-icon"></FiAward>
                                Best 7
                            </Nav.Link>
                        ) : (
                            <Nav.Link
                                onClick={() => {
                                    navigate('/best');
                                }}
                            >
                                <FiAward className="menu-icon"></FiAward>
                                Best 7
                            </Nav.Link>
                        )}
                        {currentUrl == '/' ? (
                            <Nav.Link href="#random">
                                <PiBowlFood className="menu-icon"></PiBowlFood>
                                Random & Like
                            </Nav.Link>
                        ) : (
                            <Nav.Link
                                onClick={() => {
                                    navigate('/randomlike');
                                }}
                            >
                                <PiBowlFood className="menu-icon"></PiBowlFood>
                                Random & Like
                            </Nav.Link>
                        )}
                        <Nav.Link
                            onClick={() => {
                                navigate('/category');
                            }}
                        >
                            <BiCategoryAlt className="menu-icon"></BiCategoryAlt>
                            Category
                        </Nav.Link>
                    </Nav>

                    <Nav onClick={handleMenuClick} className="side-bar ms-auto">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            <Nav.Link
                                className="likes"
                                onClick={() => {
                                    navigate('/mypage');
                                }}
                            >
                                <BiHeart className="icon"></BiHeart>
                            </Nav.Link>
                        </motion.div>

                        {isLogin ? (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <Nav.Link className="logout" onClick={handleLogout}>
                                    Logout
                                </Nav.Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <Nav.Link
                                    className="login"
                                    onClick={() => {
                                        navigate('/login');
                                    }}
                                >
                                    Login
                                </Nav.Link>
                            </motion.div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;
