require('dotenv').config()
const express = require('express')
const app = express()

app.use((req,res,next) => {
	const string = req.method + " " + req.path + " - " + req.ip
	console.log(string)
	console.log(`${req.method} ${req.path} - ${req.ip}`)
	next()
})

const publicPath = `${__dirname}/public`
app.use(express.static(publicPath))
app.use("/public", express.static(publicPath))
const mainPage = (req, res) => {
	const absolutePath = __dirname + '/views/index.html'
	res.sendFile(absolutePath)
}

app.get('/', mainPage)

app.get('/json', (req, res) => {
	if (process.env.MESSAGE_STYLE === 'uppercase') {
	  response = "Hello World".toUpperCase();
	} else {
	  response = "Hello World";
	}	
	res.json({"message": response})
})

 module.exports = app
