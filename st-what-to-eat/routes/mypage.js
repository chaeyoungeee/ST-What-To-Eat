// s3
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

const router = require('express').Router();

let connectDB = require('../database.js');
const { redirect } = require('react-router-dom');
const ObjectId = require('mongodb').ObjectId;
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/authCheck.js');
const { checkLogin } = require('../middlewares/checkLogin.js');

let db;
connectDB
    .then((client) => {
        console.log('DB(음식적 업로드용) 연결 성공');
        db = client.db('stplace');
    })
    .catch((err) => {
        console.log(err);
    });

const s3 = new S3Client({
    region: 'ap-northeast-2',
    credentials: {
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET,
    },
});

router.get('/', checkLogin, async (req, res, next) => {
    let user = await db.collection('user').findOne({ username: req.user.username });
    let likes = await Promise.all(
        user.likes.map(async (id) => {
            let data = await db.collection('place').findOne({ _id: new ObjectId(id) });
            // console.log(data)
            return data;
        })
    );
    res.json(likes);
});

router.delete('/like/delete', async (req, res, next) => {
    console.log(req.query.id);
    await db.collection('user').updateOne({ username: req.user.username }, { $pull: { likes: req.query.id } });
    let data = await db.collection('user').findOne({ username: req.user.username });
    let likes = await Promise.all(
        data.likes.map(async (id) => {
            let data = await db.collection('place').findOne({ _id: new ObjectId(id) });
            return data;
        })
    );

    await db.collection('place').updateOne(
        { _id: new ObjectId(req.query.id) },
        {
            $inc: {
                like: -1,
            },
        }
    );

    console.log(likes);
    res.json(likes);
});

module.exports = router;

// export하고 server.js에 import하기
