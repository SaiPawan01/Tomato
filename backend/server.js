import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'



//app config
const app = express()
const port = 3000

//middleware
app.use(express.json())
app.use(cors())


//DB connection
connectDB()

//api endpoints
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)


app.get('/',(req,res)=>{
    res.send('api working')
})

app.listen(port,()=>{
    console.log(`server is running...`)
})

//mongodb+srv://saipawan:<db_password>@cluster0.jzt2h.mongodb.net/?
//retryWrites=true&w=majority&appName=Cluster0