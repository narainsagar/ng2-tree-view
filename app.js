var express = require("express");
var app = express();

app.use("/", express.static(__dirname + "/dist"));

app.get("/*", function(req, res){
    res.sendFile(__dirname + "/dist/index.html");
});
var port = process.env.PORT || 9001;
app.listen(port);