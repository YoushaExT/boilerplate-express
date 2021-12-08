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
	res.json({"message": "Hello json"})
})

 module.exports = app
