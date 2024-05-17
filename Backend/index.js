const express = require("express");
const cors = require("cors")
const mainRouter = require("./routes/index")



const app = express();


// cors will let routes to work over cross origin
app.use(cors())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Adjust to your React app's URL
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     if (req.method === 'OPTIONS') {
//         return res.status(200).end();
//     }

//     next();
// })

// express.json() will let us use json in sending json response
app.use(express.json())


// here we are redirecting all the requests that are coming to api/v1 will got to main router
app.use("/api/v1",mainRouter)

app.listen(3000)