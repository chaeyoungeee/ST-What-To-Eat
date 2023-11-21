import { Row, Col } from 'react-bootstrap';
import ReplyComment from './ReplyComment';
import CommentMenu from './CommentMenu';
import AOS from 'aos';
import { useEffect } from 'react';
import CommentInput from './CommentInput';
import { useState } from 'react';
import axios from 'axios';

function Comment(props) {
    // props: type, comment, comments, setComments
    let [inputVisible, setInputVisible] = useState(false);
    let handleInputVisible = () => {
        setInputVisible(!inputVisible);
    };

    useEffect(() => {
        AOS.init();
    });
    let [edit, setEdit] = useState(false);

    const handleEditInputVisible = async () => {
        await axios.get('/user').then((response) => {
            if (props.comment.user_id == response.data._id) setEdit(!edit);
            else {
                alert(`${response.data.nickname}님이 작성한 댓글이 아닙니다.`);
            }
        }).catch((error)=>{
            alert('로그인하세요.')
        });
    };

    const [input, setInput] = useState(props.comment.content);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            place_id: props.comment.place_id,
            comment_id: props.comment._id,
            content: input,
        };
        await axios.put('/comment', data).then((response) => {
            props.setComments(response.data)
            setEdit(false)
        });
    };

    return (
        <Row className="comment" data-aos="zoom-in-down" data-aos-duration="800">
            <Col xs={6}>
                <h5>🙋🏻 {props.comment.nickname}</h5>
                {edit ? (
                    <form onSubmit={handleSubmit}>
                        <input value={input} onChange={handleInputChange} className="edit-input" type="text"></input>
                    </form>
                ) : (
                    <h5>{props.comment.content}</h5>
                )}
                <p>{props.comment.date}</p>
            </Col>

            <CommentMenu
                handleInputVisible={handleInputVisible}
                handleEditInputVisible={handleEditInputVisible}
                comment={props.comment}
                comments={props.comments}
                setComments={props.setComments}
                type="comment"
            ></CommentMenu>

            {inputVisible && <CommentInput type="reply-comment"></CommentInput>}
            {/* <ReplyComment></ReplyComment> */}
        </Row>
    );
}

export default Comment;
