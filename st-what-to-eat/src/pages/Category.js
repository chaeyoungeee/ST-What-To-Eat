import { Row, Col } from "react-bootstrap";
import PlaceCard from "../components/PlaceCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr"

function Category() {
    let places = useSelector((state) => { return state.places });
    let [idx, setIdx] = useState(0);

        let printNum = (idx) => {
            let num = Math.ceil(places.length / 9)
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
            <Row className="places">
                {
                    places.slice(idx*9, (idx+1)*9).map((place, i)=>{
                        console.log(`${i}: ${place}`);
                        return (
                            <Col md={4}>
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
                        if (idx + 1 >= Math.ceil(places.length / 9)) {
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
