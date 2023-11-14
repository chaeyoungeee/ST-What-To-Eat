// s3
const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')

const router = require("express").Router();

let connectDB = require("../database.js");
const { default: coor } = require('../src/function/getCoor.js');


/**

let data = {
    category: 
    name: 
    recommend: 0,
    unrecommend: 0,
    like: 0,
    link: 
    coord: 
    menus: [
        {
            name: 
            price: 
        },
        {
            name:
            price:
        },
        {
            name:
            price:
        },
        {
            name:
            price:
        },
    ],
    imgs: []
}
 */




let data = {
    category: '떡볶이',
    name: '크앙분식 서울과기대점',
    recommend: 0,
    unrecommend: 0,
    like: 0,
    link:'https://map.naver.com/p/search/%EA%B3%B5%EB%A6%89%20%EB%96%A1%EB%B3%B6%EC%9D%B4/place/1070129964?c=14.00,0,0,0,dh&placePath=%3Fentry%253Dbmp',
    coord: [37.6280811, 127.0768426],
    menus: [
        {
            name: '크앙-라떡',
            price:  5000
        },
        {
            name: '매콤크림파스타떡볶이',
            price: 9000
        },
        {
            name: '크앙-삼쫄',
            price: 9000
        },
        {
            name: '크왕김말이',
            price: 3800
        },
    ],
    imgs: []
}







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

// img 업로드 처리
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'placephotosbucket',
        key: function (req, file, cb) {
            cb(null, Date.now().toString()) //업로드시 파일명 변경가능
        }
    })
})


router.post('/upload', async (req, res) => { 

    upload.array('img', 3)(req, res, async (err)=>{
        if (err) console.log(err)
        else {
            console.log(req.files)
            for (file of req.files) {
                data['imgs'].push(file.location)
            }
        }
        console.log(data);

        let d = db.collection('place').insertOne(data)

        res.redirect('/test');
    })

})



module.exports = router;

// export하고 server.js에 import하기
