const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
/// bring routes

const blogRoutes = require("./routes/blog")
const authRoutes = require("./routes/auth")

//db

mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useUnifiedTopology:true ,useFindAndModify: false})
.then(() => console.log(`DB connected`))


//app

const app = express()


//middlewares
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
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})