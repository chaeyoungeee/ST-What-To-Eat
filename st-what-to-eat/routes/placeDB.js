// s3
const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')

const router = require("express").Router();


const s3 = new S3Client({
    region: 'ap-northeast-2',
    credentials: {
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET
    }
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'placephotosbucket',
        key: function (req, file, cb) {
            cb(null, Date.now().toString()) //업로드시 파일명 변경가능
        }
    })
})

router.post('/upload', upload.single('img'), async (req, res) => {
    console.log(req.file)
    console.log(req.file.location)
})



module.exports = router;

// export하고 server.js에 import하기
