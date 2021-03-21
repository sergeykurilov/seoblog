const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require('path')
// require("dotenv").config({path: path.join(__dirname, "..", ".." ,  ".env")}) ToDo
require("dotenv").config()

/// bring routes

const blogRoutes = require("./routes/blog")
const authRoutes = require("./routes/auth")


//app

const app = express()


// middlewares

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())

//cors
if(process.env.NODE_ENV === "development"){
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}
app.use(cors())

//routes middleware
app.use("/api",blogRoutes)
app.use("/api",authRoutes)

//port

const port = process.env.PORT || 8000
async function start(){
    try {
        //db
        await mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useUnifiedTopology:true ,useFindAndModify: false, useCreateIndex: true})
        console.log("DB connected")

        //app initiation
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })

    }catch (e) {
        //resolve error
        console.log(e.message)
    }
}

start();




