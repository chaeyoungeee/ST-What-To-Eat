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
import LikeItem from "../components/LikeItem";

function Like() {
    useEffect(() => {
        AOS.init();
    })

    return (
        <div id="like" className=" text-start">
                <h1>🥳</h1>
                <h3 className="title">
                    {/* <PiBowlFood className="icon"></PiBowlFood> */}
                    Like
                </h3>
                <p className="desc">많은 사람들이 가보고 싶어하는 음식점에 가보는 건 어떨까요?</p>
                {/* <Container className="container mt-3 text-center">
                <Row data-aos="zoom-in-right" data-aos-duration="300">

                    <Col xs={12} className="d-flex justify-content-center align-items-center" >
                            <div>
                                <PlaceCard></PlaceCard>
                            </div>
                    </Col>
                </Row>
                </Container> */}

                <LikeItem rank={0}></LikeItem>
                <LikeItem rank={1}></LikeItem>
                <LikeItem rank={2}></LikeItem>

            {/* <div>
                <img className="memoji3" src='https://placephotosbucket.s3.ap-northeast-2.amazonaws.com/memoji3.png'></img>
            </div> */}
            {/* <div>
                <img className="memoji2" src={memoji2}></img>
            </div> */}
 </div>
    )
}

export default Like;