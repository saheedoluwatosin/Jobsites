const mongoose = require("mongoose")


const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    jobType: { type: String, enum: ['Full-time', 'Part-time', 'Contract'], required: true },
    joblink:{type:String},
    postedBy: { type: String,  default: "Admin" }, // Employer
    createdAt: { type: Date, default: Date.now }
  },{
    timestamps:true
  });

  const Job = mongoose.model("jobschema",jobSchema)

  module.exports = Job
