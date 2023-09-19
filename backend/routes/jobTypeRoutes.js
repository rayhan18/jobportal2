const express = require('express')

const router = express.Router()
const { isAuthenticated } = require('../middlewares/auth')
const { createJobType, allJobType } = require('../controllers/jobTypeController')



//user router


router.post('/type/create',isAuthenticated,createJobType)
router.get('/type/jobs',allJobType)


module.exports =  router