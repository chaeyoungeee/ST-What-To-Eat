import ImageSlider from "../components/ImageSlider";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiAward } from "react-icons/fi";

function Best5() {
    useEffect(() => {
        AOS.init();
    })
    

    
    return (
        <div data-aos="zoom-in-down" data-aos-duration="800">
            <div id="best5" className="text-start">
                <h1>🎖️</h1>
                <h3 className="title">
                    {/* <FiAward className="icon"></FiAward> */}
                    Best 5
                </h3>
                <p className="desc">많은 추천을 받은 음식점들을 확인 해보세요!</p>
                <ImageSlider></ImageSlider>
            </div>
        </div>
    )
}

export default Best5;