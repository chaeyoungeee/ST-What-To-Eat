import { Row, Col } from 'react-bootstrap';
import { AiFillLike, AiFillDislike, AiFillHeart, AiOutlineLike } from 'react-icons/ai';
import { RiDeleteBinLine, RiEdit2Line, RiChat1Line } from 'react-icons/ri';
import { IoChatboxOutline } from 'react-icons/io5';
import { BiLike, BiChat } from 'react-icons/bi';
import axios from 'axios';
import { PutObjectOutputFilterSensitiveLog } from '@aws-sdk/client-s3';

function CommentMenu(props) {
    // props: type, comment, handleInputVisible, comments, setComments, handleEditInputVisible
    const handleDelete = () => {
        axios
            .delete('/comment', {
                params: {
                    comment: props.comment,
                }
            })
            .then((response) => {
                props.setComments(response.data);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    };

    return (
        <Col xs={6} className="d-flex justify-content-end">
            {/* <p>답글</p>
                    <p>추천</p>
                    <p>수정/삭제</p> */}
            <Row className="comment-menu">
                {/* {props.type == 'comment' ? (
                    <Col onClick={props.handleInputVisible}>
                        <RiChat1Line className="icon"></RiChat1Line>
                    </Col>
                ) : null} */}
                {/* <Col>
                    <BiLike className="icon"></BiLike>
                </Col> */}
                <Col onClick={props.handleEditInputVisible}>
                    <RiEdit2Line className="icon"></RiEdit2Line>
                </Col>
                <Col>
                    <RiDeleteBinLine onClick={handleDelete} className="icon"></RiDeleteBinLine>
                </Col>
            </Row>
        </Col>
    );
}

export default CommentMenu;
