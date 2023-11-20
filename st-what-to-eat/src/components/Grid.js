import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import PlaceCard from './PlaceCard';

function Grid(props) {
    let [idx, setIdx] = useState(0);

    let printNum = (idx) => {
        let num = Math.ceil(props.places.length / 9);
        let a = [];
        for (let i = 0; i < num; i++) {
            if (idx == i) {
                a.push(
                    <span aria-current="page" class="page-numbers current">
                        {i + 1}
                    </span>
                );
            } else {
                a.push(
                    <a
                        class="page-numbers"
                        onClick={() => {
                            handleNumClick(i);
                        }}
                    >
                        {i + 1}
                    </a>
                );
            }
        }
        return a;
    };

    let handleNumClick = (idx) => {
        setIdx(idx);
    };

    if (!props.places) {
        return <></>;
    }

    return (
        <div>
            <Row className="places">
                {props.places.slice(idx * 9, (idx + 1) * 9).map((place, i) => {
                    return (
                        <Col md={6} lg={4}>
                            <PlaceCard setLikes={props.setLikes} mypage={props.mypage} place={place}></PlaceCard>
                        </Col>
                    );
                })}
            </Row>
            <div class="pagination-wrapper">
                <div class="pagination">
                    <a
                        class="prev page-numbers"
                        onClick={() => {
                            if (idx - 1 < 0) {
                                setIdx(idx);
                            } else {
                                setIdx(--idx);
                            }
                        }}
                    >
                        prev
                    </a>
                    {printNum(idx)}
                    <a
                        class="next page-numbers"
                        onClick={() => {
                            if (idx + 1 >= Math.ceil(props.places.length / 9)) {
                                setIdx(idx);
                            } else {
                                setIdx(++idx);
                            }
                        }}
                    >
                        next
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Grid;
