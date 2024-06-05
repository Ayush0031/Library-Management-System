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
module.exports={createAuthor}