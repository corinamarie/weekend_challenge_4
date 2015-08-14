var mongoose = require("mongoose");

var MessageSchema = new mongoose.Schema({
    name : String,
    message : String
});

module.exports = mongoose.model("messages", MessageSchema);