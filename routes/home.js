const express = require('express')
const router = express.Router()
const path = require('path')
const dotenv = require('dotenv')

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/views', 'home.html'))
    }
    catch (error) {
        console.log(error)
        res.send('Cannot locate the resource')
    }
})

module.exports = router