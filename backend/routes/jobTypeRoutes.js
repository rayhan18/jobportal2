const express = require('express')

const router = express.Router()
const { isAuthenticated, isAdmin } = require('../middlewares/auth')
const { createJobType, allJobType, updateJobType, deleteJobType } = require('../controllers/jobTypeController')



//user router


router.post('/type/create',isAuthenticated,createJobType)
router.get('/type/jobs',allJobType)
router.put('/type/update/:type_id',isAuthenticated,isAdmin, updateJobType )
router.delete('/type/delete/:type_id',isAuthenticated,isAdmin, deleteJobType )



module.exports =  router