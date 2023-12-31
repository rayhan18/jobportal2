const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser =require("body-parser")
require("dotenv").config()
var cors = require("cors")
const cookieParser = require("cookie-parser")
const errorHandler = require("./middlewares/error")
//roues
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoute')
const jobTypeRoutes = require('./routes/jobTypeRoutes')
const jobRoutes = require('./routes/jobsRoutes')


//database connnectiion
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
}).then(()=>console.log('DB connected'))
.catch((err)=> console.log(err))

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({
    limit:'5mb',
    extended:true
}))
app.use(cookieParser())
app.use(cors())

//routes
app.use('/api/v1' , authRoutes)
app.use('/api/v1' , userRoutes)
app.use('/api/v1' , jobTypeRoutes)
app.use('/api/v1' , jobRoutes)


//error handler middleware
app.use(errorHandler)



//port 
const port = process.env.PORT || 8000

app.listen(port , ()=>{
    console.log(` server running on this ${port}`)
})