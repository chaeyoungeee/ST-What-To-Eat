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

router.get('/', async (req, res, next) => {
    let data = await db
        .collection('comment')
        .find({ place_id: new ObjectId(req.query.place_id) })
        .toArray();
    res.json(data);
});

router.post('/', checkLogin, async (req, res, next) => {
    // db.collection('comment').deleteMany({});
    let data = {
        user_id: req.user._id,
        nickname: req.user.nickname,
        place_id: new ObjectId(req.body.place_id),
        recommend: 0,
        date: req.body.date,
        content: req.body.content,
    };
    db.collection('comment').insertOne(data);

    res.json(data);
});

router.put('/', checkLogin, async (req, res, next) => {
    await db
        .collection('comment')
        .updateOne({ _id: new ObjectId(req.body.comment_id) }, { $set: { content: req.body.content } });

    let data = await db.collection('comment').find().toArray();
    res.json(data);
});


router.delete('/', checkLogin, async (req, res, next) => {
    if (new ObjectId(req.user._id) != req.query.comment.user_id) {
        res.status(403).send(`${req.user.nickname}님이 작성한 댓글이 아닙니다.`);
    }
    else {
        console.log(req.query.comment._id)
        await db.collection('comment').deleteOne({
            _id: new ObjectId(req.query.comment._id)
        });
        let data = await db.collection('comment').find().toArray()
        res.json(data)
    }
});

module.exports = router;
