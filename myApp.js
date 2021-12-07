var express = require('express');
var app = express();


mainPage = (req, res) => {
	res.send("Hello Express")
}

app.get('/', mainPage)


 module.exports = app;
