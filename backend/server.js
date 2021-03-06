const express = require("express")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require('path')
const WebSocket = require('ws');
const WebSocketJSONStream = require('@teamwork/websocket-json-stream');
const ShareDB = require('sharedb');
const richText = require("rich-text");
// require("dotenv").config({path: path.join(__dirname, "..", ".." ,  ".env")}) ToDo
require("dotenv").config()


/// bring routes

const blogRoutes = require("./routes/blog")
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const tagsRoutes = require("./routes/tags")
const formRoutes = require("./routes/form")
//app

const app = express()


// middlewares

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())

//cors
if (process.env.NODE_ENV === "development") {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}
app.use(cors())

//routes middleware
app.use(express.static('static'));
app.use("/api", blogRoutes)
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", tagsRoutes)
app.use("/api", formRoutes)
//port

const port = process.env.PORT || 8000

function websocket() {
    ShareDB.types.register(require('rich-text').type);
    const shareDBServer = new ShareDB();
    const connection = shareDBServer.connect();
    const doc = connection.get('documents', 'firstDocument');
    const example = connection.get('example', 'title');
    var wss = new WebSocket.Server({ port: 8090 });
    example.fetch(function(err) {
        if (err) throw err;
        if (example.type === null) {
            example.create({content: ''}, () => {
                const wss = new WebSocket.Server({ port: 8080 });
                wss.on('connection', function connection(ws) {
                    const jsonStream = new WebSocketJSONStream(ws);
                    shareDBServer.listen(jsonStream);
                });
            });
            return;
        }
    });
    doc.fetch(function (err) {
        if (err) throw err;
        if (doc.type === null) {
            doc.create([{ insert: '' }], 'rich-text', () => {

                wss.on('connection', function connection(ws) {
                    const jsonStream = new WebSocketJSONStream(ws);
                    shareDBServer.listen(jsonStream);
                });
            });
            return;
        }
    });
}


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

websocket()
start();





