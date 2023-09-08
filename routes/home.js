const express = require('express')
const router = express.Router()


const home = require('../controllers/home')

router.get('/contactus' , home.contactus)
router.post('/success' , home.success)

module.exports = router;