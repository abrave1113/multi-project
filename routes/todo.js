const express = require('express')
const { dirname } = require('path/posix')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/views', 'todo.html'))
    }
    catch(error) {
        console.log(error)
        res.redirect('/home')
    }
})

module.exports = router
