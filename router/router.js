const express = require("express")
const { pJob, getall, getId } = require("../controller/control")



const router = express.Router()


router.post("/postjob",pJob)
router.get("/alljobs",getall)
router.get("/get/:id",getId)





module.exports = router