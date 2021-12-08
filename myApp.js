require('dotenv').config()
const express = require('express')
const app = express()

const publicPath = `${__dirname}/public`
app.use(express.static(publicPath))
app.use("/public", express.static(publicPath))
const mainPage = (req, res) => {
	const absolutePath = __dirname + '/views/index.html'
	res.sendFile(absolutePath)
}

app.get('/', mainPage)

app.get('/json', (req, res) => {
	let response = 'Hello Json'
	if (process.env.MESSAGE_STYLE === 'uppercase') {
		response = response.toUpperCase()
	}	
	res.json({"message": response})
})

 module.exports = app
