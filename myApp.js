const express = require('express');
const app = express();


const mainPage = (req, res) => {
	const absolutePath = __dirname + '/views/index.html'
	res.sendFile(absolutePath)
}

app.get('/', mainPage)


 module.exports = app;
