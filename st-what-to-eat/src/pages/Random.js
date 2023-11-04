import { PiBowlFood } from "react-icons/pi";
import { TbRotate360 } from "react-icons/tb"
import memoji2 from "../imgs/memoji2.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlaceCard from "../components/PlaceCard";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai"
import { motion } from "framer-motion";

function Random() {
    useEffect(() => {
        AOS.init();
    })

    return (
            <div id="random" className=" text-start">
                <h1>🙌</h1>
                <h3 className="title">
                    {/* <PiBowlFood className="icon"></PiBowlFood> */}
                    Random
                </h3>

                <p>주사위를 눌러 랜덤 메뉴를 추천 받아보세요!</p>
                <Container className="container mt-3 text-center">
                <Row data-aos="zoom-in-right" data-aos-duration="300">
                    <Col lg={4} className="d-none d-lg-block">
                        <div>
                            <img className="memoji2" src={memoji2}></img>
                        </div>
                        
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center align-items-center" >
                            <div>
                                <PlaceCard></PlaceCard>
                            </div>
                        </Col>
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                        <div>
                            <motion.div className="button retry-btn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                {/* <TbRotate360 className="icon"></TbRotate360> */}
                                <span className="icon">
                                    🎲
                                </span>
                            </motion.div>

                            <motion.div className="button like-btn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <span className="icon">
                                    🫰
                                </span>
                                {/* <AiFillHeart className="icon"></AiFillHeart> */}
                            </motion.div>
                        </div>
                        </Col>
                    </Row>
                
                </Container>

            </div>
    )
}

export default Random;