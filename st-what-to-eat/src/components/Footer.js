import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai"

function Footer() {
    return(
        <div id="footer">
            {/* <div className="footer-box">
                <input placeholder="과기대 주변 맛집을 알려주세요!"></input>
            </div> */}
            <div className="require">
                <form>
                    <textarea placeholder="과기대 주변 맛집을 알려주세요!">
                    </textarea>
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
                    <span>
                        © 2023 과기대에서 오늘 뭐 먹지. All Rights reserved
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Footer;