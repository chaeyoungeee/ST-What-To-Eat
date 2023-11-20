// s3
const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')

const router = require("express").Router();

let connectDB = require("../database.js");
const { redirect } = require('react-router-dom');
const ObjectId = require('mongodb').ObjectId;
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/authCheck.js');
const { PiCornersOutLight } = require('react-icons/pi');

const { checkLogin } = require('../middlewares/checkLogin.js');

let db;
connectDB
    .then((client) => {
        console.log("DB(음식적 업로드용) 연결 성공");
        db = client.db('stplace')
    })
    .catch((err) => {
        console.log(err);
    });



const s3 = new S3Client({
    region: 'ap-northeast-2',
    credentials: {
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET
    }
})

router.get('/', async (req, res) => {
    let data = await db.collection('place').find().toArray()

    /* recommend, unrecommend, like값 조작   */
    const places = await db.collection('place').find().toArray();

    // places.forEach(async (place) => {
    //   const recommend = 5 + Math.floor(Math.random() * 100);
    //   const unrecommend =  Math.floor(Math.random() * 7);
    //   const like = 5 + Math.floor(Math.random() * 70);
    //   await db.collection('place').updateOne({ _id: place._id }, { $set: { recommend, unrecommend, like } });
    // });


    res.json(data)
})



router.put('/recommend', checkLogin, async (req, res) => {
    await db.collection('place').updateOne({ _id: new ObjectId(req.body.id) }, {
        $inc: {
            recommend: 1
        }
    })
    res.json(true);
})

router.put('/unrecommend', checkLogin, async (req, res) => {
    await db.collection('place').updateOne({ _id: new ObjectId(req.body.id) }, {
        $inc: {
            unrecommend: 1
        }
    })
    res.json(true);
})

router.put('/like', checkLogin, async (req, res, next) => {
    await db.collection('place').updateOne({ _id: new ObjectId(req.body.id) }, {
        $inc: {
            like: 1
        }
    })

    await db.collection('user').updateOne({ username: req.user.username }, {
        $push: {'likes': req.body.id}
    })
    res.json(true);
})


module.exports = router;

// export하고 server.js에 import하기
