const express = require("express");
const mainRouter = require("./routes/index")
const cors = require("cors")


const app = express();


// cors will let routes to work over cross origin
app.use(cors())

// express.json() will let us use json in sending json response
app.use(express.json())


// here we are redirecting all the requests that are coming to api/v1 will got to main router
app.use("/api/v1",mainRouter)

app.listen(3000)