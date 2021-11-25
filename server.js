const express = require("express")
const app = express()
const path = require('path')

const homeRouter = require('./routes/home.js');
const menuRouter = require('./routes/menu');
const todoRouter = require('./routes/todo');
const sliderRouter = require('./routes/slider.js');

app.use(express.static(__dirname + '/' + 'public'));
app.use('/views', express.static(__dirname + '/' + 'public/views'));
app.use('/images', express.static(__dirname + '/' + 'public/images'));
app.use('/styles', express.static(__dirname + '/' + 'public/styles'));
app.use('/javascripts', express.static(__dirname + '/' + 'public/javascripts'));
app.use('/home', homeRouter)
app.use('/menu', menuRouter)
app.use('/todo', todoRouter)
app.use('/slider', sliderRouter)
console.log(__dirname)
const PORT = process.env.PORT || 8887
app.listen(PORT, console.log(`Connected on port ${PORT}...`))

module.exports = app