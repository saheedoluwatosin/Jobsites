const express = require("express")
const pJob = require("../controller/control")


const router = express.Router()


router.post("/postjob",pJob)






module.exports = router