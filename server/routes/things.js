var express = require("express");
var router = express.Router();
var Messages = require("../models/messages");

router.post("/", function(req, res, next){
    console.log("the post request is working: ", req.body);
    Messages.create(req.body, function(err, post){
        res.send("data has been stored");
    });
});

router.delete("/:id", function(req, res, next){
    Messages.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err){
            console.log("error!!! ", err);
        }
        res.json(post);
    });
});

router.get("/", function(req, res, next){
    Messages.find(function(err, messages){
        res.json(messages);
    });
});

module.exports = router;