var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there");
});

app.get("/bye", function(req, res) {
    res.send("Good Bye");
})



app.listen(3000, function() {
    console.log("server has started");
});