import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlaceCard from "../components/PlaceCard";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Random() {

    useEffect(() => {
        AOS.init();
    })
    
    let [fade, setFade] = useState('end')

    let places = useSelector((state) => { return state.places });
    let sortedPlaces = [...places]
    sortedPlaces = sortedPlaces.sort(()=> Math.random() - 0.5)

   

    let diceClickHandle = () => {
        sortedPlaces = sortedPlaces.sort(() => Math.random() - 0.5)
        setFade('')
        setTimeout(() => { setFade('end') }, 300);
    }





    return (
            <div id="random" className=" text-start">
                <h1>🙌</h1>
                <h3 className="title">
                    {/* <PiBowlFood className="icon"></PiBowlFood> */}
                    Random
                </h3>

                <p className="desc">주사위를 눌러 랜덤 메뉴를 추천 받아보세요!</p>
                <Container className="container mt-3 text-center">
                <Row data-aos="zoom-in-down" data-aos-duration="800">
                    {/* <Col lg={4} className="d-none d-lg-block">
                        <div>
                            <img className="memoji2" src={memoji2}></img>
                        </div>
                        
                    </Col> */}

                    <Col xs={12} className="d-flex justify-content-center align-items-center" >
                            <div className={"start " + fade}>
                                <PlaceCard place={sortedPlaces[0]}></PlaceCard>
                            </div>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center align-items-center">
                            <motion.div onClick={diceClickHandle} className="button retry-btn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <span className="icon">
                                    🎲
                                </span>
                            </motion.div>
                    </Col>
                    {/* <Col xs={12} className="d-flex justify-content-center align-items-center">
                        <div>
                            <motion.div className="button retry-btn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <span className="icon">
                                    🎲
                                </span>
                            </motion.div>

                            <motion.div className="button like-btn"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                <span className="icon">
                                    ❤️
                                </span>
                            </motion.div>
                        </div>
                        </Col> */}
                    </Row>
                
                </Container>

            </div>
    )
}

export default Random;