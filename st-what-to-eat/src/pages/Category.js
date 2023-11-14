import { Row, Col } from "react-bootstrap";
import PlaceCard from "../components/PlaceCard";
import { useSelector } from "react-redux";
import { VscCircleFilled } from "react-icons/vsc"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr"

function Category() {
    let places = useSelector((state) => { return state.places });
    let [idx, setIdx] = useState(0);
    let category = useSelector(state => state.category);
    let [pl, setPl] = useState([...places]);
    let [selectedCategory, setSelectedCategory] = useState('전체');
    let [selectedSorting, setSelectedSorting] = useState('최신순');


    useEffect(()=> {
        setPl(pl)
        handleSortingClick(selectedSorting);
    }, [])

    const handleCategoryClick = (category) => {
        setSelectedSorting('최신순');
        setSelectedCategory(category);
        if (category == '전체') {
            setPl([...places]);
        } else {
            let k = places.filter((ele) => ele.category === category)
            
            setPl([...k]); 
        }

        
       // handleSortingClick(selectedSorting)

    };


    const handleSortingClick = (sorting) => {
        setSelectedSorting(sorting);
        if(sorting == '추천순') {
            setPl(pl.sort((a, b) => { return b.recommend - a.recommend }))
        } 
        else if (sorting == '인기순') {
            setPl(pl.sort((a, b) => { return b.like - a.like }))
        }
        else {
            setPl([...pl].reverse())
        }
    };

    let printNum = (idx) => {
        let num = Math.ceil(pl.length / 9)
        let a = []
        for (let i = 0; i < num; i++) {
            if (idx == i) {
                a.push(<span aria-current="page" class="page-numbers current">{i + 1}</span>)
            } else {
                a.push(<a class="page-numbers" onClick={()=>{handleNumClick(i)}}>{i + 1}</a>)
            }
        }
        return a;
    }

    let handleNumClick = (idx) => {
        setIdx(idx);
    }
    

    return (
        <div id="category" className="first">
            <div className="filter text-start">
                <h1>📂</h1>
                <h3 className="title">Filter</h3>
                <Row className="filter-box">
                    <Col md={8}>
                        <motion.div
                            onClick={() => handleCategoryClick('전체')}
                            className={`box ${selectedCategory == '전체' && "selected"}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <VscCircleFilled style={{ color: '#fffff' }} fontSize={20} className='category-icon'></VscCircleFilled>
                            <span className='category'>전체</span>
                        </motion.div>

                        {
                            category.map((item)=>{
                                return(
                                    <motion.div
                                        className={`box ${selectedCategory == item.name && "selected"}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        onClick={() => handleCategoryClick(item.name)}
                                    >
                                        <VscCircleFilled style={{ color: item.color }} fontSize={20} className='category-icon'></VscCircleFilled>
                                        <span className='category'>{item.name}</span>
                                    </motion.div>
                                )
                            })
                        }
                    </Col>
                    <Col className="text-end">
                    {
                        ['추천순', '인기순', '최신순'].map((item)=>{
                            return(
                                <motion.div
                                    onClick={() => handleSortingClick(item)}
                                    className={`box ${selectedSorting == item && "selected"}`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <VscCircleFilled style={{ color: '#fffff' }} fontSize={20} className='category-icon'></VscCircleFilled>
                                    <span className='category'>{item}</span>
                                </motion.div>
                            )
                        })
                    }
                        
                    </Col>
                </Row>
            </div>

            <Row className="places">
                {
                    pl.slice(idx*9, (idx+1)*9).map((place, i)=>{
                        return (
                            <Col md={6} lg={4}>
                                <PlaceCard place={place}></PlaceCard>
                            </Col>
                        )
                    })
                }
            </Row>
            

            <div class="pagination-wrapper">
                <div class="pagination">
                    <a class="prev page-numbers" onClick={()=>{
                        if(idx-1<0) {
                            setIdx(idx);
                        }
                        else {
                            setIdx(--idx);
                        }
                    }}>prev</a>
                    {printNum(idx)}
                    <a class="next page-numbers" onClick={() => {
                        if (idx + 1 >= Math.ceil(pl.length / 9)) {
                            setIdx(idx);
                        }
                        else {
                            setIdx(++idx);
                        }
                    }}>next</a>
                </div>
            </div>
        </div>
    )

}

export default Category;
