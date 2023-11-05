// s3
const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')

const router = require("express").Router();

let connectDB = require("../database.js");
const { default: coor } = require('../src/function/getCoor.js');

/**
let data = {
    category: '',
    name: '',
    recommend: 0,
    unrecommend: 0,
    like: 0,
    link: '',
    map_link: '',
    menu: [
        {
            name: '',
            photo: ''
        },
        {
            name: '',
            photo: ''
        },
        {
            name: '',
            photo: ''
        }
    ]
}
 */




let data = {
    category: '파스타',
    name: '리틀파스타 공릉본점',
    recommend: 0,
    unrecommend: 0,
    like: 0,
    link: '',
    coor: (37.629665, 127.075765),
    menu: [
        {
            name: '청양 가리비&날치알 파스타대표',
            price: '15900'
        },
        {
            name: '봉골레 파스타',
            price: '13900'
        },
        {
            name: '마르게리따 피자',
            price: '17900'
        }
    ],
    photo: []
}







let db;
connectDB
    .then((client) => {
        console.log("DB(음식적 업로드용) 연결 성공");
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
    upload.array('img', 5)(req, res, async (err)=>{
        if (err) console.log(err)
        else {
            console.log(req.files)
            for (file of req.files) {
                data['photo'].push(file.location)
            }
        }
        console.log(data);

        // let d = db.collection('place').insertOne(data)
    })

})



module.exports = router;

// export하고 server.js에 import하기
