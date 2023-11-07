import { Row, Col } from "react-bootstrap";

function CommentInput(props) {
    return (
        <Col className={props.type}>
            <div className='comment-input'>
                    <input type="text"></input>
                    <input type="submit" value='Submit' ></input>
            </div>
            
        </Col>
    )
}

export default CommentInput;