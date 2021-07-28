var { nanoid } = require("nanoid"); //修改部分

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) { 
    res.json([{id:nanoid(), name:"上課", completed:false}, //修改部分
            {id:nanoid(), name:"打掃", completed:false}, //修改部分
            {id:nanoid(), name:"冥想", completed:false}]) //修改部分
});

module.exports = router;

