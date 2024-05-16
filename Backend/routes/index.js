const express = require("express")
const userRouter = require("./user")
const accountRouter = require("./account")

// creating a router
const router = express.Router();

// directing all the user requests to user router
router.use("/user", userRouter)
router.use("/account", accountRouter )

module.exports = router;
