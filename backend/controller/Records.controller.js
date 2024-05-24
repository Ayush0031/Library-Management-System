const Records=require("../models/Records.model.js")
const Books=require("../models/Book.model.js")
const bookIssue=async(req,res)=>{
    const book= await Books.findOne({isbn:req.body.isbn});
    
    try {

        await Records.create({
            studentId:req.body.studentId,
            isbn:req.body.isbn,
            borrowing_date:req.body.issueDate,
            return_date:req.body.returnDate,
            return_status:"Pending"
            

        })
        await Books.findByIdAndUpdate(book._id,{
            qty:book.qty-1
        },{
            new:true
        })
        res.status(201).send({msg:"Book Issued Successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(400).send({msg:"Not able to Issue book"})
    }
}
const getAllIssuedBooks=async(req,res)=>{
    try {
        const data=await Records.find();
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        res.status(400).send({msg:"Not able to get all book records"})
    }
}
module.exports={bookIssue,getAllIssuedBooks}