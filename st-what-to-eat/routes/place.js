
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


router.get('/', async (req, res) => {
    let data = await db.collection('place').find().toArray();

    /* recommend, unrecommend, like값 조작   */
    const places = await db.collection('place').find().toArray();

    // places.forEach(async (place) => {
    //   const recommend = 5 + Math.floor(Math.random() * 100);
    //   const unrecommend =  Math.floor(Math.random() * 7);
    //   const like = 5 + Math.floor(Math.random() * 70);
    //   await db.collection('place').updateOne({ _id: place._id }, { $set: { recommend, unrecommend, like } });
    // });

    res.json(data);
});

router.put('/recommend', checkLogin, async (req, res) => {
    await db.collection('place').updateOne(
        { _id: new ObjectId(req.body.id) },
        {
            $inc: {
                recommend: 1,
            },
        }
    );
    res.json(true);
});

router.put('/unrecommend', checkLogin, async (req, res) => {
    await db.collection('place').updateOne(
        { _id: new ObjectId(req.body.id) },
        {
            $inc: {
                unrecommend: 1,
            },
        }
    );
    res.json(true);
});

router.put('/like', checkLogin, async (req, res, next) => {
    await db.collection('place').updateOne(
        { _id: new ObjectId(req.body.id) },
        {
            $inc: {
                like: 1,
            },
        }
    );

    await db.collection('user').updateOne(
        { username: req.user.username },
        {
            $push: { likes: req.body.id },
        }
    );
    res.json(true);
});

module.exports = router;

// export하고 server.js에 import하기
