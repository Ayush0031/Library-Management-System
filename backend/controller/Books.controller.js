const Books=require("../models/Book.model.js")

const addBook = async (req,res)=>{
    const book=req.body;
    try {
        
        await Books.create(book)
        res.status(201).json("Books Added Successfully")
        
        
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"Not Able to add Books"})
    }
}
const getAllBooks=async(req,res)=>{
    try {
        const books= await Books.find();
        res.status(200).json(books)
    } catch (error) {
        res.status(401).json({msg:"Not Able to get all Books"})
    }
}
module.exports={getAllBooks,addBook}