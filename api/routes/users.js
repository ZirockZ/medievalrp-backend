const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/user.js");
const Token = require("../models/token.js");
const errorHandler = require("../../helpers/error-handler");
const app = express();

app.post("/list", /*auth,*/ (req, res, next) => list(req, res, next));
app.post("/list2",/* auth,*/ (req, res, next) => list2(req, res, next));
//app.post("/", auth, (req, res, next) => getUser(req, res, next))

function getUser(req, res, next){
  User.find( {_id: req.userData.userId} ).select('nickname skin').then(result => {}).catch(e => errorHandler(res))
}



function list(req, res, next) {
  User.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => errorHandler(res, err));
}
//К УДАЛЕНИЮ
function list2(req, res, next) {
  Token.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => errorHandler(res, err));
}


module.exports = app;
