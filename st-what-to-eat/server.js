const express = require('express');
const path = require('path');
const app = express();


// 환경변수 이용
require('dotenv').config()

app.use(express.json());
var cors = require('cors');
app.use(cors());


// db 연결 import
let connectDB = require('./database.js')

let db
connectDB.then((client) => {
  console.log('DB 연결 성공')
  app.listen(1400, function () {
    console.log('listening 1400')
  }); 
}) 
.catch((err) => {
  console.log(err)
})


app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
});


// api 분리
app.use('/api/place', require('./routes/place.js'))


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});


