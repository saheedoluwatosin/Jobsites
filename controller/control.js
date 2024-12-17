const jobService = require('../services/service');
const express = require("express")
const{response,request}= require("express")







const pJob = async(request,response)=>{
    try {
        const jobdata = request.body
        const savedJob = await jobService.createJob(jobdata);
        return response.status(201).json({ success: true, job: savedJob });
    } catch (error) {
        return response.status(500).json({ success: false, message: error.message });
    }
    
     
}

const getall = async (request,response)=>{
    try {
        const alljobs = await jobService.getJob()
        return response.status(200).json({success:true, alljobs:alljobs})
    } catch (error) {
        return response.status(500).json({ success: false, message: error.message });
    }
}

const getId = async(request,response)=>{
    try {
        const {id} = request.params
    if(!id){
        return response.status(400).json({
            success:false,
            message:"Not Found"
        })
    }
    const job = await jobService.getjobId(id)
    if (!job) {
        return response.status(404).json({
            success: false,
            message: "Job not found",
        });
    }
    return response.status(200).json({success:true, job})
    } catch (error) {
        return response.status(500).json({ success: false, message: error.message });
    }
    
}

module.exports = {
    pJob,
    getall,
    getId
}