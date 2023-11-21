// s3
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');

const router = require('express').Router();

let connectDB = require('../database.js');

let data = {
    category: '기타',
    name: '뚝방닭구이 공릉점',
    recommend: 0,
    unrecommend: 0,
    like: 0,
    link: '',
    coord: [37.62612610000001, 127.0749745],
    menus: [
        {
            name: '소금구이 모듬',
            price: 42900,
        },
        {
            name: '숫붗간장닭갈비',
            price: 12900,
        },
        {
            name: '닭목살',
            price: 12900,
        },
    ],
    imgs: [],
};

let db;
connectDB
    .then((client) => {
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

// img 업로드 처리
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'placephotosbucket',
        key: function (req, file, cb) {
            cb(null, Date.now().toString()); //업로드시 파일명 변경가능
        },
    }),
});

router.post('/upload', async (req, res) => {
    upload.array('img', 3)(req, res, async (err) => {
        if (err) console.log(err);
        else {
            for (file of req.files) {
                data['imgs'].push(file.location);
            }
        }

        let d = db.collection('place').insertOne(data);

        res.redirect('/test');
    });
});

module.exports = router;

// export하고 server.js에 import하기
