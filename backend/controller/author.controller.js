const Author=require("../models/Author.model")

const createAuthor=async(req,res)=>{
    const author=req.body;
    try {
       await Author.create(author)
       res.status(201).json("Author Created Successfully")
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"Not Able to add Books"})
    }
}
const deleteAuthor=async(req,res)=>{
    
    try {
       await Author.deleteOne(req.body._id)
       res.status(201).json("Author Deleted Successfully")
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"Not Able to add Books"})
    }
}
const findByAuthorId=async(req,res)=>{
    
    try {
       const author=await Author.findOne(req.body._id)
       res.status(201).json(author)
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"Not Able to find author"})
    }
}
module.exports={createAuthor,deleteAuthor}