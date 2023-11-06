import AOS from "aos";
import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

function LikeItem(props) {
    let rank = [ '🥇', '🥈', '🥉']
    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="like-item" data-aos="zoom-in-down" data-aos-duration="800">
            <h2>{rank[props.rank]}</h2>
            <span>❤️  </span><span>+130</span>
            <Row>
                <Col md={8} className="title">
                    <h4>쪼매 매운 떡볶이 공릉</h4>
                </Col>
                <Col md={4} className="detail">
                    <div>자세히 보기</div>
                </Col>
            </Row>
        </div>
    )
}

export default LikeItem;