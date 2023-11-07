import { Row, Col } from "react-bootstrap";
import ReplyComment from "./ReplyComment";
import CommentMenu from "./CommentMenu";
import AOS from "aos";
import { useEffect } from "react";
import CommentInput from "./CommentInput";
import { useState } from "react";

function Comment(props) {
    
// props: type, data

    let [inputComp, setInputComp] = useState(false);
    let handleInputComp = () => {
        setInputComp(!inputComp)
    }

    useEffect(() => {
        AOS.init();
    })
    return (
        <Row className='comment' data-aos="zoom-in-down" data-aos-duration="800">

            <Col xs={6}>
                <p>유저명</p>
                <h5>댓글 내용</h5>
                <p>2023.11.06</p>
            </Col>

            <CommentMenu type='comment'></CommentMenu>
            
            <CommentInput type='reply-comment'></CommentInput>
            <ReplyComment></ReplyComment>
        </Row>
    )
}

export default Comment;