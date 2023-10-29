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
        <div data-aos="flip-up" data-aos-duration="400">
            <div id="best5" className="text-start">
                <h3 className="title">
                    <FiAward className="best-icon"></FiAward>
                    <span>Best 5</span>
                </h3>
                <ImageSlider></ImageSlider>
            </div>
        </div>
    )
}

export default Best5;