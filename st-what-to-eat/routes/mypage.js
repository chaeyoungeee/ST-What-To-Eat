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

router.get('/', checkLogin, async (req, res, next) => {
    let user = await db.collection('user').findOne({ username: req.user.username });
    console.log(user.likes);
    if (user.likes == undefined) res.json([]);
    else {
        let likes = await Promise.all(
            user.likes.map(async (id) => {
                let data = await db.collection('place').findOne({ _id: new ObjectId(id) });
                return data;
            })
        );
        res.json(likes);
    }
});

router.delete('/like/delete', async (req, res, next) => {
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
    res.json(likes);
});

module.exports = router;

// export하고 server.js에 import하기
