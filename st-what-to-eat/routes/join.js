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
    if (req.body.nickname == '') return res.status(404).send('닉네임을 입력하세요.');
    else if (req.body.username == '') return res.status(404).send('아이디를 입력하세요.');
    else if (req.body.password == '') return res.status(404).send('패스워드를 입력하세요.');

    let isNicknameExist = await db
        .collection('user')
        .find({
            nickname: req.body.nickname,
        })
        .toArray();
    if (isNicknameExist.length != 0) {
       return res.status(404).send('이미 존재하는 닉네임입니다.');
    }

    let isUsernameExist = await db
        .collection('user')
        .find({
            username: req.body.username,
        })
        .toArray();
    if (isUsernameExist.length != 0) {
        return res.status(404).send('이미 존재하는 아이디입니다.');
    }

    if (req.body.password.length < 7) {
        return res.status(404).send('비밀번호는 7글자 이상이어야 합니다.');
    }


    let hash = await bcrypt.hash(req.body.password, 10);
    console.log(hash);

    await db.collection('user').insertOne({
        username: req.body.username,
        password: hash,
        nickname: req.body.nickname,
    });
    res.redirect('/login');
});

module.exports = router;
