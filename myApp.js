var express = require('express');
var app = express();

console.log("Hello World")

mainPage = (req, res) => {
	res.send("Hello Express")
}


app.get('/', mainPage)


















 module.exports = app;
