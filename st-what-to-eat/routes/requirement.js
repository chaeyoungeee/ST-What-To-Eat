const router = require('express').Router();

let connectDB = require('../database.js');
const ObjectId = require('mongodb').ObjectId;
const { checkLogin } = require('../middlewares/checkLogin.js');

let db;
connectDB
    .then((client) => {
        db = client.db('stplace');
    })
    .catch((err) => {
        console.log(err);
    });

router.post('/', checkLogin, async (req, res, next) => {
    await db.collection('requirement').insertOne({ content: req.body.content });
    res.send('추천해주신 음식점이 추후 업데이트 될 예정입니다.');
});

module.exports = router;

// export하고 server.js에 import하기
