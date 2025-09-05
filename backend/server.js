const express = require('express')
const cors = require('cors')
const MongoConnect = require('./MongoDB/MongoConnection')
const { TaskRouter } = require('./routes/taskRoutes')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3210

//cors
app.use(cors())
app.use(express.json())


//test
app.get("/test",(req,res)=>{
    res.status(200).json({msg:"Test Route"})
})

//static routes
app.use("/tasks",TaskRouter)


MongoConnect()
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})