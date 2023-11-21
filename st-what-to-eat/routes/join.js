const router = require('express').Router();
const bcrypt = require('bcrypt');
const ObjectId = require('mongodb').ObjectId;

// db 연결
let connectDB = require('../database.js');

let db;
connectDB
    .then((client) => {
        db = client.db('stplace');
    })
    .catch((err) => {
        console.log(err);
    });

router.post('/', async (req, res) => {
    let hash = await bcrypt.hash(req.body.password, 10);
    console.log(hash);

    await db.collection('user').insertOne({
        //! 추가해야할 1) username이나 password가 빈칸이거나 짧을 때, username이 이미 db에 존재할 때 예외 처리
        username: req.body.username,
        password: hash,
        nickname: req.body.nickname,
    });
    res.redirect('/login');
});

module.exports = router;
