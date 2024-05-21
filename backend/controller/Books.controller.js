const Books=require("../models/Book.model.js")

const addBook = async (req,res)=>{
    const book=req.body;
    try {
        await Books.create(book).then(()=>
           { res.status(201).json("Books Added Successfully")}
        ).catch((err)=>{
            res.status(401).json("Not Able to add Books")
        })
    } catch (error) {
        res.status(401).json("Not Able to add Books")
    }
}
module.exports=addBook