const Job = require("../model/jobs")




const createJob = async (jobdata)=>{
    try {
        const newJob = new Job(jobdata)
        const savedJob = await newJob.save();
        return savedJob;
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}



module.exports ={
    createJob
}
















