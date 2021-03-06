var express = require("express");
var router = express.Router();
var path = require("path");

//think of this file as html routes
//add router.get function for second file

//second router
router.get("/admin", function(req, res, next){
    var file = req.params[0] || "views/admin.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

router.get("/*", function(req, res, next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;