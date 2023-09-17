const express = require('express')
const { signIn, signUp, logout } = require('../controllers/authcontroller')

const router = express.Router()


//auth router

router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/logout', logout)

module.exports =  router