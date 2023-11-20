module.exports = { checkLogin(req, res, next) {
    console.log(req.user)
    if (!req.user) {
        res.status(400).send('로그인이 필요합니다.')
    }
    else {
        next()
    }
    }
}