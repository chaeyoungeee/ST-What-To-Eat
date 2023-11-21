import MapNaverDefault from '../components/MapNaverDefault';
import { Row, Col } from 'react-bootstrap';
import { AiFillLike, AiFillDislike, AiFillHeart } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Place() {
    let { id } = useParams();

    let places = useSelector((state) => state.places);
    let [place, setPlace] = useState(
        places.find((ele) => {
            return ele._id == id;
        })
    );

    let [comments, setComments] = useState([]);

    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 300);

        return () => {
            setFade('');
        };
    }, []);

    useEffect(() => {
        setPlace(
            places.find((ele) => {
                return ele._id == id;
            })
        );
    }, [places]);

    useEffect(() => {
        if (place != undefined) {
            axios
                .get('/comment', {
                    params: { place_id: place._id },
                })
                .then((response) => {
                    setComments([...response.data]);
                })
                .catch((error) => {});
        }
    }, [place]);

    // let [imgSrc, setImgSrc] = useState(place['imgs'][0])

    // useState(()=>{
    //     let i = 1;
    //     setInterval(()=>{
    //         setImgSrc(place['imgs'][i])
    //         i++;
    //         if (i >= place['imgs'].length) i = 0
    //     }, 2500)
    // })

    let [recommend, setRecommend] = useState(0);
    let [unrecommend, setUnrecommend] = useState(0);
    let [like, setLike] = useState(0);

    useEffect(() => {
        if (place != undefined) {
            setRecommend(place.recommend);
            setUnrecommend(place.unrecommend);
            setLike(place.like);
        }
    }, [place]);

    let handleRecommendClick = async () => {
        await axios
            .put('/place/recommend', {
                id: id,
            })
            .then((response) => {
                if (response.data == true) setRecommend(++recommend);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    };

    let handleUnRecommendClick = async () => {
        await axios
            .put('/place/unrecommend', {
                id: id,
            })
            .then((response) => {
                if (response.data == true) setUnrecommend(++unrecommend);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    };

    let handleLikeClick = async () => {
        await axios
            .put('/place/like', {
                id: id,
            })
            .then((response) => {
                if (response.data == true) setLike(++like);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    };

    if (!place)
        return (
            <div id="place" className="first loading">
                <div className={'start ' + fade}></div>
            </div>
        );

    return (
        <div>
            <div id="place" className="first">
                <div className={'start ' + fade}>
                    <div className="text-start">
                        <h1>🍜</h1>
                        <h3 className="title">{place.name}</h3>
                    </div>
                    <Row>
                        <Col md={6} className="col-box">
                            <MapNaverDefault height={'20rem'} coord={place.coord}></MapNaverDefault>
                        </Col>

                        <Col md={6} className="col-box img-box" style={{ overflow: 'hidden' }}>
                            <img className="img" style={{ height: '20rem' }} src={place.imgs[0]}></img>
                        </Col>

                        <Col className="col-box menu text-start" md={12}>
                            <h2>🥳</h2>
                            <h3>Menu</h3>
                            <Row className="menu-table">
                                {place.menus.map(function (menu) {
                                    return (
                                        <Col lg={6}>
                                            <Row>
                                                <Col className="menu-name" xs={9}>
                                                    {menu.name}
                                                </Col>
                                                <Col xs={3} className="menu-price text-end">
                                                    {menu.price}
                                                </Col>
                                            </Row>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                    <Row className="icons">
                        <Col>
                            <motion.div
                                onClick={handleRecommendClick}
                                className="icon"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <AiFillLike className="recommend-icon"></AiFillLike>
                            </motion.div>
                            <p>{recommend}</p>
                        </Col>
                        <Col>
                            <motion.div
                                onClick={handleUnRecommendClick}
                                className="icon"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <AiFillDislike className="unrecommend-icon"></AiFillDislike>
                            </motion.div>
                            <p>{unrecommend}</p>
                        </Col>
                        <Col>
                            <motion.div
                                onClick={handleLikeClick}
                                className="icon"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <AiFillHeart className="like-icon"></AiFillHeart>
                            </motion.div>
                            <p>{like}</p>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="text-start">
                <CommentInput id={place._id} comments={comments} setComments={setComments} type="comment" />
                {comments
                    .slice(0)
                    .reverse()
                    .map((comment) => {
                        return <Comment comments={comments} setComments={setComments} comment={comment} />;
                    })}
            </div>
        </div>
    );
}

export default Place;
