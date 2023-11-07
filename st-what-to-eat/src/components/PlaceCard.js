import { Card, Button } from 'react-bootstrap'
import food from '../imgs/food1.jpg';
import { VscCircleFilled } from "react-icons/vsc"
import { motion } from "framer-motion";
import { AiFillLike, AiTwotoneHeart } from "react-icons/ai"

function PlaceCard(props) {

    return (
        <motion.div
            className='place-card'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <div className='card-img'>
                <img src={props.place != undefined ? props.place['imgs'][0] : null}></img>
                </div>
                <div className='card-content m-2'>
                <h5 className='mb-3'>✨ {props.place != undefined ? props.place.name : null}</h5>


                <div className='mb-3'>
                    <motion.div
                        className='box'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <VscCircleFilled style={{ color: 'rgba(256,0, 0' }} fontSize={20} className='category-icon'></VscCircleFilled>
                        <span className='category'>{props.place != undefined ? props.place.category : null}</span>
                    </motion.div>

                    <motion.div
                        className='box ms-2'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <AiFillLike className='recommend-icon'></AiFillLike>
                        <span className='recommend'>{props.place != undefined ? props.place.recommend : null}</span>
                    </motion.div>

                    <motion.div
                        className='box ms-2'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                        <AiTwotoneHeart className='like-icon'></AiTwotoneHeart>
                        <span className='like'>{props.place != undefined ? props.place.like : null}</span>
                    </motion.div>
                </div>
                </div>
        </motion.div>
    )
}

export default PlaceCard;