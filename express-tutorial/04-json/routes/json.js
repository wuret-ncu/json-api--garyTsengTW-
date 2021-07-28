var { nanoid } = require("nanoid");

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json([{id:nanoid(), name:"上課", completed:false},
            {id:nanoid(), name:"打掃", completed:false},
            {id:nanoid(), name:"冥想", completed:false}])
});

module.exports = router;

