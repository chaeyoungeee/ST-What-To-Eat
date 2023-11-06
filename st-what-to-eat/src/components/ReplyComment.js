import { Row, Col } from "react-bootstrap";
import { AiFillLike, AiFillDislike, AiFillHeart, AiOutlineLike } from "react-icons/ai"
import { RiDeleteBinLine, RiEdit2Line, RiChat1Line } from "react-icons/ri"
import { IoChatboxOutline } from "react-icons/io5"
import { BiLike, BiChat } from "react-icons/bi"
import CommentMenu from "./CommentMenu";

function ReplyComment(props) {
    // props: type, data
    return (
        <Col xs={12}>
            <Row className="reply-comment">
                <Col xs={6}>
                    <p>답글 유저명</p>
                    <h5>답글 내용</h5>
                    <p>2023.11.06</p>
                </Col>

                <CommentMenu type='reply'></CommentMenu>
            </Row>
        </Col>
    )
}

export default ReplyComment;