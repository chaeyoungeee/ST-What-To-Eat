import ImageSlider from '../components/ImageSlider';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Row, Col } from 'react-bootstrap';

function Best5() {
    useEffect(() => {
        AOS.init();
    });

    return (
        <div>
            <div id="best" className="text-start">
                <h1>🎖️</h1>
                <h3 className="title">Best 7</h3>
                <p className="desc">많은 추천을 받은 음식점들을 확인 해보세요!</p>
                <div data-aos="zoom-in-down" data-aos-duration="800">
                    <ImageSlider></ImageSlider>
                </div>
            </div>
        </div>
    );
}

export default Best5;
