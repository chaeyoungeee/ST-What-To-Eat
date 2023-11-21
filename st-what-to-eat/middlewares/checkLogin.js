module.exports = {
    checkLogin(req, res, next) {
        if (!req.user) {
            res.status(401).send('로그인이 필요합니다.');
        } else {
            next();
        }
    },
};
