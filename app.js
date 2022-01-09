var express = require("express");
var app = express();
var request = require("request");
var path = require("path");
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/views')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", function(req,res){
    res.render('index');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,"localhost", function(){
    console.log("listening");
});