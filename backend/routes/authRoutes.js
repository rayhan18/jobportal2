const express = require('express')
const { signIn, signUp, logout, userProfile } = require('../controllers/authcontroller')
const { isAuthenticated, isAdmin } = require('../middlewares/auth')

const router = express.Router()


//auth router

router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/logout', logout)
router.get('/me',isAuthenticated, isAdmin, userProfile)

module.exports =  router