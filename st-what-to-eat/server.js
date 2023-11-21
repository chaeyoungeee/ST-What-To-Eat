const { checkLogin } = require('./middlewares/checkLogin.js');

const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

// 환경변수 이용
require('dotenv').config();

app.use(express.json());
var cors = require('cors');
app.use(cors());

// db 연결 import
let connectDB = require('./database.js');
const { CopyObjectOutputFilterSennsitiveLog } = require('@aws-sdk/client-s3');

let db;
connectDB
    .then((client) => {
        console.log('DB 연결 성공');
        app.listen(1303, function () {
            console.log('listening 1300');
            db = client.db('stplace');
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
});

// api 분리
// app.use('/login', require('./routes/login.js'))

const bcrypt = require('bcrypt');
// passport, passport-local, express-session 라이브러리 세팅
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const MongoStore = require('connect-mongo');

const ObjectId = require('mongodb').ObjectId;

app.use(passport.initialize());
app.use(
    session({
        secret: process.env.SECRET_PW,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 24 * 60 * 60 * 1000 }, // session 유지 시간 (24시간)
        store: MongoStore.create({
            mongoUrl: process.env.DB_URL,
            dbName: 'stplace',
        }),
    })
);

app.use(passport.session());

// id, password 검사
// id, password 외 다른 것도 제출받아서 검증 받고 싶다면 => passReqToCallback 이용
// 실행하려면 passport.authenticate('local')()
passport.use(
    new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
        let result = await db.collection('user').findOne({ username: 입력한아이디 });
        if (!result) {
            return cb(null, false, { message: '아이디를 잘못 입력했습니다.' });
        }

        if (await bcrypt.compare(입력한비번, result.password)) {
            return cb(null, result);
        } else {
            return cb(null, false, { message: '비밀번호를 잘못 입력했습니다.' });
        }
    })
);

passport.serializeUser((user, done) => {
    process.nextTick(() => {
        // 내부 코드를 비동기적으로 처리
        done(null, { id: user._id, username: user.username, nickname: user.nickname });
    });
});

// user가 보낸 cookie 분석
passport.deserializeUser(async (user, done) => {
    let result = await db.collection('user').findOne({ _id: new ObjectId(user.id) });
    delete result.password;
    process.nextTick(() => {
        return done(null, result);
    });
});

app.use('/join', require('./routes/join.js'));

app.post('/login', async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        // db와 검사 후 실행할 코드

        if (err) return res.status(500).json(err);
        if (!user) {
            let data = info.message;
            return res.status(400).json(data);
        }
        // 로그인 성공
        req.logIn(user, (err) => {
            if (err) return next(err);
            else return res.json(req.user);
        });
    })(req, res, next);
});

app.get('/logout', (req, res, next) => {
    req.logout((err) => {
        req.session.destroy();
        if (err) {
            return next(err);
        } else res.json('로그아웃 성공');
    });
});

app.get('/user', checkLogin, async (req, res, next) => {
    res.json(req.user);
});
// export하고 server.js에 import하기

// 이미지 업로드
// s3
app.use('/img', require('./routes/placeDB.js'));

app.use('/place', require('./routes/place.js'));

app.use('/mypage', require('./routes/mypage.js'));

app.use('/comment', require('./routes/comment.js'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});
