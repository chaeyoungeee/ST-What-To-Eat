const router = require("express").Router();

let connectDB = require("../database.js");

let db;
connectDB
  .then((client) => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

router.get("/", (req, res) => {
  console.log(1)
  res.json("1");
});

module.exports = router;

// export하고 server.js에 import하기
