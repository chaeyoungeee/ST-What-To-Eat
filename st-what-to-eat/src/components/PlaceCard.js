import { VscCircleFilled } from "react-icons/vsc"
import { motion } from "framer-motion";
import { AiFillLike, AiTwotoneHeart } from "react-icons/ai"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

function PlaceCard(props) {

    let navigate = useNavigate();
    let category = useSelector(state => state.category);

    const handleCardClick = () => {
        navigate(`/place/${props.place._id}`)
    }

    const handleDelete = (e) => {
        axios.delete('/mypage/like/delete', {
            params:  { id: props.place._id }
        }).then(async (response)=>{
            props.setLikes(response.data);
        })
        e.stopPropagation(); 
    }

    const categoryColor = () => {
        if (category != undefined) {
            return category.find(ele => ele.name === props.place.category)?.color
        }
        else {
            return '#fff'
        }
    }

    if (!props.place) return <></>
    return (
        <motion.div
            onClick={handleCardClick}
            className='place-card'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <div className='card-img'>
                { props.mypage == true &&
                    <TiDelete
                    className='delete-btn'
                    onClick={handleDelete}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                ></TiDelete>
}
                <img src={props.place != undefined ? props.place['imgs'][0] : null}></img>
                </div>
                <div className='card-content m-2'>
                        <h5 className='mb-3'>✨ {props.place != undefined ? props.place.name : null}</h5>
                        <div className='mb-3'>
                            <div className='box'>
                                <VscCircleFilled style={{ color: categoryColor() }} fontSize={20} className='category-icon'></VscCircleFilled>
                                <span className='category'>{props.place != undefined ? props.place.category : null}</span>
                            </div>

                            <div className='box ms-2'>
                                <AiFillLike className='recommend-icon'></AiFillLike>
                                <span className='recommend'>{props.place != undefined ? props.place.recommend : null}</span>
                            </div>

                            <div className='box ms-2'>
                                <AiTwotoneHeart className='like-icon'></AiTwotoneHeart>
                                <span className='like'>{props.place != undefined ? props.place.like : null}</span>
                            </div>
                        </div>
                </div>
        </motion.div>
    )
}

export default PlaceCard;