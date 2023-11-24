import { Row, Col } from 'react-bootstrap';
import PlaceCard from '../components/PlaceCard';
import { useSelector } from 'react-redux';
import { VscCircleFilled } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Grid from '../components/Grid';
import { initPlaces } from '../store';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { IoSearch } from 'react-icons/io5';

function Category() {
    const dispatch = useDispatch();
    let places = useSelector((state) => {
        return state.places;
    });

    let category = useSelector((state) => state.category);
    let [pl, setPl] = useState([...places].reverse());
    let [selectedCategory, setSelectedCategory] = useState('전체');
    let [selectedSorting, setSelectedSorting] = useState('최신순');
    let [fade, setFade] = useState('');

    useEffect(() => {
        if (places.length == 0) {
            axios.get('/place').then((res) => {
                dispatch(initPlaces(res.data));
            });
        }
    });

    useEffect(() => {
        handleSortingClick(selectedSorting);
        setTimeout(() => {
            setFade('end');
        }, 300);
        return () => {
            setFade('');
        };
    }, []);

    useEffect(() => {
        setPl([...places].reverse());
    }, [places]);

    const handleCategoryClick = (category) => {
        setSelectedSorting('최신순');
        setSelectedCategory(category);
        if (category == '전체') {
            setPl([...places].reverse());
        } else {
            let k = places.filter((ele) => ele.category === category);

            setPl([...k].reverse());
        }
    };

    const handleSortingClick = (sorting) => {
        setSelectedSorting(sorting);
        if (sorting == '추천순') {
            setPl(
                pl.sort((a, b) => {
                    return b.recommend - a.recommend;
                })
            );
        } else if (sorting == '인기순') {
            setPl(
                pl.sort((a, b) => {
                    return b.like - a.like;
                })
            );
        } else {
            setPl([...pl].reverse());
        }
    };

    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    const handleInputSubmit = async (e) => {
        e.preventDefault();

        setSelectedCategory('전체');
        let filter = places.filter((place) => {
            return place.name.includes(search);
        });
        console.log(filter);
        setPl(filter);
    };

    // if (pl.length == 0)
    //     return (
    //         <div className="first loading">
    //             <div className={'start ' + fade}></div>
    //         </div>
    //     );

    return (
        <div id="category" className="first">
            <div className={'start ' + fade}>
                <div className="title-pd text-start">
                    <h1>📂</h1>
                    <Row>
                        <Col>
                            <h3 className="title">Filter</h3>
                        </Col>
                        <Col>
                            <form className="search" onSubmit={handleInputSubmit}>
                                <input onChange={handleInputChange} placeholder="음식점명을 검색해보세요!" className="search-input"></input>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                >
                                    <IoSearch></IoSearch>
                                </motion.button>
                            </form>
                        </Col>
                    </Row>
                    <Row className="filter-box">
                        <Col md={8}>
                            <motion.div
                                onClick={() => handleCategoryClick('전체')}
                                className={`box ${selectedCategory == '전체' && 'selected'}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <VscCircleFilled
                                    style={{ color: '#fffff' }}
                                    fontSize={20}
                                    className="category-icon"
                                ></VscCircleFilled>
                                <span className="category">전체</span>
                            </motion.div>

                            {category.map((item) => {
                                return (
                                    <motion.div
                                        className={`box ${selectedCategory == item.name && 'selected'}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                        onClick={() => handleCategoryClick(item.name)}
                                    >
                                        <VscCircleFilled
                                            style={{ color: item.color }}
                                            fontSize={20}
                                            className="category-icon"
                                        ></VscCircleFilled>
                                        <span className="category">{item.name}</span>
                                    </motion.div>
                                );
                            })}
                        </Col>
                        <Col className="text-end">
                            {['추천순', '인기순', '최신순'].map((item) => {
                                return (
                                    <motion.div
                                        onClick={() => handleSortingClick(item)}
                                        className={`box ${selectedSorting == item && 'selected'}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                    >
                                        <VscCircleFilled
                                            style={{ color: '#fffff' }}
                                            fontSize={20}
                                            className="category-icon"
                                        ></VscCircleFilled>
                                        <span className="category">{item}</span>
                                    </motion.div>
                                );
                            })}
                        </Col>
                    </Row>
                </div>

                <Grid places={pl} mypage={false}></Grid>
            </div>
        </div>
    );
}

export default Category;
