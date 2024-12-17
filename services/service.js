const { response } = require("express");
const Job = require("../model/jobs")




const createJob = async (jobdata)=>{
    try {
        const newJob = new Job(jobdata)
        const savedJob = await newJob.save();
        return savedJob;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getJob = async ()=>{
    try {
        const alljob = await Job.find()
        return alljob
    } catch (error) {
        throw new Error(error.message)
    }
}

const getjobId = async(id)=>{
    try {
        const getjobid = await Job.findById(id)
        return getjobid
    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports ={
    createJob,getJob,getjobId
}
















