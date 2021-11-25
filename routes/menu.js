const express = require('express')
const { dirname } = require('path')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    try {
        console.log('Slowing down a bit')
        res.sendFile(path.join(__dirname, '../public/views', 'index.html'))
    }
    catch(error) {
        console.log(error)
        res.redirect('/home')
    }
})

module.exports = router
