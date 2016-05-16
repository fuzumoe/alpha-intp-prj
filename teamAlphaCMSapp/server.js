var express = require("express");
var app = express();

app.use(express.static(__dirname+"/public_html"));

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.listen(3000);
console.log("server running on port 3000");