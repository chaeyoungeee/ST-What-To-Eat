module.exports = {
    async isLoggedIn(req, res, next) {
        console.log(req)
        console.log(req.isAuthenticated())
        if (req.isAuthenticated()) {
            next();
        } else {
            res.send('로그인이 필요합니다.');
        }
    },
    async isNotLoggedIn(req, res, next) {
        if (!req.isAuthenticated()) {
            next();
        } else {
            res.status(403).send('로그인 상태입니다.');
        }
    },
}