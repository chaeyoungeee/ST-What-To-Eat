import MapNaverDefault from "../components/MapNaverDefault";
import { Row, Col } from "react-bootstrap";
import { AiFillLike, AiFillDislike, AiFillHeart } from "react-icons/ai"

function Place() {
    let data = {
        category: '파스타',
        name: '리틀파스타 공릉본점',
        recommend: 0,
        unrecommend: 0,
        like: 0,
        link: '',
        coord: [37.629665, 127.075765],
        menu: [
            {
                name: '청양 가리비&날치알 파스타',
                price: '15900'
            },
            {
                name: '봉골레 파스타',
                price: '13900'
            },
            {
                name: '마르게리따 피자',
                price: '17900'
            }
        ],
        imgs: ['https://placephotosbucket.s3.ap-northeast-2.amazonaws.com/1698915873504', 'https://placephotosbucket.s3.ap-northeast-2.amazonaws.com/1698915873513']
    }

    return(
        <div id="place" className="first">
            <div className="text-start">
                <h1>🍜</h1>
                <h3 className="title">{data.name}</h3>
            </div>
            <Row>
                <Col md={6} className="p-right">
                    <Row>
                        <Col className="col-box" xs={12}>
                            <MapNaverDefault coord={data.coord}></MapNaverDefault>
                        </Col>
                        <Col className="col-box" style={{height: '22rem', overflow: 'hidden'}} xs={12}>
                            <img className="img"  src={data.imgs[0]}></img>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="p-left">
                    <Row>
                        <Col className="col-box" style={{ height: '27rem', overflow: 'hidden' }} xs={12}>
                            <img className="img" src={data.imgs[1]}></img>
                        </Col>
                        <Col className="col-box menu text-start" xs={12} style={{ height: '18rem'}}>
                            <h2>🥳</h2>
                            <h3>대표 메뉴</h3>
                            {
                            data.menu.map(function(menu){
                                return(
                                    <Row>
                                        <Col className="menu-name" xs={9}>{menu.name}</Col>
                                        <Col xs={3}className="menu-price text-end">{menu.price}</Col>
                                    </Row>
                                )
                            })
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="icons">
                <Col>
                    <div className="icon">
                        <AiFillLike className="recommend-icon"></AiFillLike>
                    </div>
                    <p>100</p>
                </Col>
                <Col>
                    <div className="icon">
                        <AiFillDislike className="unrecommend-icon"></AiFillDislike>
                    </div>
                    <p>5</p>
                </Col>
                <Col>
                    <div className="icon">
                        <AiFillHeart className="like-icon"></AiFillHeart>
                    </div>
                    <p>10</p>
                </Col>
            </Row>
        </div>
    )
}

export default Place;