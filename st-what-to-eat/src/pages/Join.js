import { useEffect, useState } from "react";

function Join() {
    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => { setFade('end') }, 300)

        return () => {
            setFade('')
        }
    }, [])

    return (
        <div id="join" className="first center">
            <form className={"form-box start " + fade} action="/join" method="POST">
                <h2>Join</h2>
                <input name="nickname" placeholder="nickname" />
                <input name="username" placeholder="username" />
                <input name="password" placeholder="password" type="password" />
                <button type="submit" class="login">Join</button>
            </form>
        </div>
    )
}

export default Join;