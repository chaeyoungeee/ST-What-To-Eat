import { PiBowlFood } from 'react-icons/pi';
import { TbRotate360 } from 'react-icons/tb';
import memoji2 from '../imgs/memoji2.png';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LikeItem from '../components/LikeItem';
import { useSelector } from 'react-redux';

function Like() {
    useEffect(() => {
        AOS.init();
    });

    let places = useSelector((state) => {
        return state.places;
    });
    let sortedPlaces = [...places];
    sortedPlaces = sortedPlaces.sort((a, b) => {
        return b.like - a.like;
    });

    return (
        <div id="like" className=" text-start">
            <h1>🥳</h1>
            <h3 className="title">Like</h3>
            <p className="desc">많은 사람들이 가보고 싶어하는 음식점에 가보는 건 어떨까요?</p>
            {sortedPlaces.slice(0, 3).map((place, i) => {
                return <LikeItem rank={i} place={place}></LikeItem>;
            })}
        </div>
    );
}

export default Like;
