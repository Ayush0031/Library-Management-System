const Student=require("../models/Student.model.js")
const addStudent= async(req,res)=>{
    try {
        await Student.create(req.body)
        res.status(201).json({msg:"Student Created Successfully"})
    } catch (error) {
        res.status(500).json({msg:"Not able to add Student"})
    }
}
const deleteStudent= async(req,res)=>{
    try {
        await Student.deleteOne(req.body._id)
        res.status(201).json({msg:"Student deleted successfully"})
    } catch (error) {
        res.status(500).json({msg:"Error deleting student"})
    }
}
const getAllStudent=async(req,res)=>{
    try {
        const data=await Student.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({msg:"Not able to add Student"})
    }
}
module.exports={addStudent,getAllStudent,deleteStudent}