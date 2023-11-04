function Join() {
    return (
        <div id="join" className="first center">
            <form class="form-box" action="/login" method="POST">
                <h2>Join</h2>
                <input name="username" placeholder="name" />
                <input name="id" placeholder="id" />
                <input name="password" placeholder="password" type="password" />
                <button type="submit" class="login">Join</button>
            </form>
        </div>
    )
}

export default Join;