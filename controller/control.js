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



module.exports = pJob