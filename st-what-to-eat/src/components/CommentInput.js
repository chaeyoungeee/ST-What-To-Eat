import { Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import getCurrentDate from '../function/getCurrentDate';

function CommentInput(props) {
    // props: id, comments, setComments
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            place_id: props.id,
            content: input,
            date: getCurrentDate(),
        };
        await axios.post('/comment', data).then((response) => {
            console.log(response.data);
            let new_comments = [...props.comments, response.data];
            props.setComments(new_comments);
        });
    };

    return (
        <Col className={props.type}>
            <form onSubmit={handleSubmit} className="comment-input">
                <input type="text" value={input} onChange={handleInputChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </Col>
    );
}

export default CommentInput;
