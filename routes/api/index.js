var router = require("express").Router(); 

var dangerIndex = require("./danger");

router.use('/danger', dangerIndex);

module.exports = router;
