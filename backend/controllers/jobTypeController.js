const jobType = require('../models/jobTypeModel')
const userModel = require('../models/userModel')
const ErrorResponse = require('../utils/errorResponse')

//create job category

exports.createJobType = async (req,res,next)=>{
    try {
        const jobT =await jobType.create({
            jobTypeName:req.body.jobTypeName,
            user:req.user.id
        })
        res.status(201).json({
            success:true,
            jobT
        })
    } catch (error) {
        next(error)
    }
}

//all job category
exports.allJobType = async (req,res,next)=>{
    try {
        const jobT =await jobType.find()
        res.status(200).json({
            success:true,
            jobT
        })
    } catch (error) {
        next(error)
    }
}

//update job type not work
exports.updateJobType = async (req,res,next)=>{
    try {
        const jobT =await jobType.findByIdAndUpdate(req.params.type_id, {new:true})
        res.status(200).json({
            success:true,
            jobT
        })
    } catch (error) {
        next(error)
    }
}
//delete job type
exports.deleteJobType = async (req,res,next)=>{
    try {
        const jobT =await jobType.findByIdAndDelete(req.params.type_id)
        res.status(200).json({
            success:true,
            message: 'job type deleted'
            
        })
    } catch (error) {
        next(new ErrorResponse("server error",500))
    }
}
//job history
exports.createUserJobHistory = async (req,res,next)=>{
    const { title, description, salary, location } = req.body;
    try {
        const currentUser =await userModel.findOne({_id: req.user._id})
        if(!currentUser){
            return next(new ErrorResponse('you must log in',401))
        }else{
            const addJobHistory = {
                title,
                description,
                salary,
                location,
                user: req.user._id
            }
            currentUser.jobsHistory.push(addJobHistory)
            await currentUser.save()
        }
        res.status(200).json({
            success:true,
            currentUser
            
        })
    } catch (error) {
        next(error)
    }
}