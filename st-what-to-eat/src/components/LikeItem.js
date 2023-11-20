import AOS from 'aos';
import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function LikeItem(props) {
    let rank = ['🥇', '🥈', '🥉'];
    useEffect(() => {
        AOS.init();
    });

    let navigate = useNavigate();

    const handleDetailClick = (id) => {
        navigate(`/place/${id}`);
    };

    return (
        <div className="like-item" data-aos="zoom-in-down" data-aos-duration="800">
            <h2>{rank[props.rank]}</h2>
            <span>❤️ </span>
            <span>+{props.place.like}</span>
            <Row>
                <Col md={8} className="title">
                    <h4>{props.place.name}</h4>
                </Col>
                <Col md={4} className="detail">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        onClick={() => {
                            handleDetailClick(props.place._id);
                        }}
                    >
                        자세히 보기
                    </motion.div>
                </Col>
            </Row>
        </div>
    );
}

export default LikeItem;
