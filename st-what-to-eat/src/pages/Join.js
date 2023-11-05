function Join() {
    return (
        <div id="join" className="first center">
            <form class="form-box" action="/join" method="POST">
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