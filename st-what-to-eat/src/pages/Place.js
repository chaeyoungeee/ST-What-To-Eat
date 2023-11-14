import MapNaverDefault from "../components/MapNaverDefault";
import { Row, Col } from "react-bootstrap";
import { AiFillLike, AiFillDislike, AiFillHeart, AiOutlineLike } from "react-icons/ai"
import { RiDeleteBinLine, RiEdit2Line, RiChat1Line } from "react-icons/ri"
import { IoChatboxOutline } from "react-icons/io5"
import { BiLike, BiChat } from "react-icons/bi"
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import { useSelector } from "react-redux";

function Place() {
    let { id } = useParams();

    let places = useSelector(state=>state.places);
    let place = places.find((ele)=>{
        console.log(ele._id)
        return ele._id == id
    })

    console.log(place)


    let [fade, setFade] = useState('')

    useEffect(() => {
      setTimeout(() => { setFade('end') }, 300)

      return () => {
        setFade('')
      }
    }, [])

    let data = {
        category: '파스타',
        name: '리틀파스타 공릉본점',
        recommend: 0,
        unrecommend: 0,
        like: 0,
        link: '',
        coord: [37.6220598, 127.07962],
        menu: [
            {
                name: '페페그라노',
                price: 17500
            },
            {
                name: '봉골레 파스타',
                price: '13900'
            },
            {
                name: '마르게리따 피자',
                price: '17900'
            }
        ],
        imgs: ['https://placephotosbucket.s3.ap-northeast-2.amazonaws.com/1698915873504', 'https://placephotosbucket.s3.ap-northeast-2.amazonaws.com/1698915873513']
    }

    // let [imgSrc, setImgSrc] = useState(place['imgs'][0])

    // useState(()=>{
    //     let i = 1;
    //     setInterval(()=>{
    //         setImgSrc(place['imgs'][i])
    //         i++;
    //         if (i >= place['imgs'].length) i = 0
    //     }, 2500)
    // })

    if (!place) return (<div id="place" className="first loading">
        <div className={"start " + fade}></div>
    </div>)

    return(
        <div>
        <div id="place" className="first">
                <div className={"start " + fade}>
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
                            {
                                place.menus.map(function (menu) {
                                    return (
                                        <Col lg={6}>
                                            <Row>
                                                <Col className="menu-name" xs={9}>{menu.name}</Col>
                                                <Col xs={3} className="menu-price text-end">{menu.price}</Col>
                                            </Row>
                                        </Col>
                                    )
                                })
                            }
                            </Row>
                        </Col>
                    </Row>


            {/* <Row>
                <Col md={6} className="p-right">
                    <Row>
                        <Col className="col-box" xs={12}>
                            <MapNaverDefault coord={data.coord}></MapNaverDefault>
                        </Col>
                        <Col className="col-box" style={{height: '22rem', overflow: 'hidden'}} xs={12}>
                            <img className="img"  src={data.imgs[0]}></img>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="p-left">
                    <Row>
                        <Col className="col-box" style={{ height: '27rem', overflow: 'hidden' }} xs={12}>
                            <img className="img" src={data.imgs[1]}></img>
                        </Col>
                        <Col className="col-box menu text-start" xs={12} style={{ height: '18rem'}}>
                            <h2>🥳</h2>
                            <h3>Menu</h3>
                            {
                            data.menu.map(function(menu){
                                return(
                                    <Row>
                                        <Col className="menu-name" xs={9}>{menu.name}</Col>
                                        <Col xs={3}className="menu-price text-end">{menu.price}</Col>
                                    </Row>
                                )
                            })
                            }
                        </Col>
                    </Row>
                </Col>
            </Row> */}

            <Row className="icons">
                <Col>
                    <motion.div
                            className='icon'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <AiFillLike className="recommend-icon"></AiFillLike>
                    </motion.div>
                    <p>{place.recommend}</p>
                </Col>
                <Col>
                    <motion.div
                        className='icon'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <AiFillDislike className="unrecommend-icon"></AiFillDislike>
                    </motion.div>
                    <p>{place.unrecommend}</p>
                </Col>
                <Col>
                    <motion.div
                        className='icon'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <AiFillHeart className="like-icon"></AiFillHeart>
                    </motion.div>
                    <p>{place.like}</p>
                </Col>
            </Row>
                </div>
        </div>
        

        <div className="text-start">
            <CommentInput type='comment' />
            <Comment />
        </div>

        </div>
    )
}

export default Place;