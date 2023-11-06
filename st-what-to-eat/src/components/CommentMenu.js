import { Row, Col } from "react-bootstrap";
import { AiFillLike, AiFillDislike, AiFillHeart, AiOutlineLike } from "react-icons/ai"
import { RiDeleteBinLine, RiEdit2Line, RiChat1Line } from "react-icons/ri"
import { IoChatboxOutline } from "react-icons/io5"
import { BiLike, BiChat } from "react-icons/bi"

function CommentMenu(props) {
    // props: type, user_id, current_login_id
    return (
        <Col className="d-flex justify-content-end">
            {/* <p>답글</p>
                    <p>추천</p>
                    <p>수정/삭제</p> */}
            <Row className="comment-menu">
                {props.type == 'comment' ? <Col>
                    <RiChat1Line className="icon"></RiChat1Line>
                </Col> : null }
                <Col>
                    <BiLike className="icon"></BiLike>
                </Col>
                <Col>
                    <RiEdit2Line className="icon"></RiEdit2Line>
                </Col>
                <Col>
                    <RiDeleteBinLine className="icon"></RiDeleteBinLine>
                </Col>
            </Row>
        </Col >
    )
}

export default CommentMenu;