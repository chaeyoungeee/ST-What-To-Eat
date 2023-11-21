import { HiOutlineMailOpen } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

import axios from 'axios';
import { useState } from 'react';

function Footer() {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post('/requirement', {
                content: input,
            })
            .then((response) => {
                alert(response.data);
            })
            .catch((error) => {
                alert(error.response.data);
            });
    };
    return (
        <div id="footer">
            {/* <div className="footer-box">
                <input placeholder="과기대 주변 맛집을 알려주세요!"></input>
            </div> */}
            <div className="require">
                <form onSubmit={handleSubmit}>
                    <textarea onChange={handleInputChange} placeholder="과기대 주변 맛집을 알려주세요!"></textarea>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>

            <div className="info">
                <div className="">
                    <HiOutlineMailOpen className="info-icon"></HiOutlineMailOpen>
                    <span>chaeinge@gmail.com</span>
                </div>
                <div>
                    <AiOutlinePhone className="info-icon"></AiOutlinePhone>
                    <span>010-3945-7136</span>
                </div>
                <div>
                    <span>© 2023 과기대에서 오늘 뭐 먹지. All Rights reserved</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
