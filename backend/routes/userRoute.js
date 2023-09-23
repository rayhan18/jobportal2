const express = require('express')
const { allUserController, singleUser, editUser, deleteUser } = require('../controllers/userController')
const { isAuthenticated, isAdmin } = require('../middlewares/auth')
const { createUserJobHistory } = require('../controllers/jobTypeController')

const router = express.Router()


//user router


router.get('/allusers',isAuthenticated,isAdmin ,allUserController)
router.get('/user/:id',isAuthenticated, singleUser)
router.put('/user/edit/:id',isAuthenticated, editUser)
router.delete('/user/delete/:id',isAuthenticated,isAdmin,deleteUser)
router.post('/user/jobhistory',isAuthenticated, createUserJobHistory )
module.exports =  router