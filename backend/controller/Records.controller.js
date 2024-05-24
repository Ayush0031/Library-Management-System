const Records=require("../models/Records.model.js")

const bookIssue=async(req,res)=>{
    console.log(req.body.isbn)
    try {
        await Records.create({
            studentId:req.body.studentId,
            isbn:req.body.isbn,
            borrowing_date:req.body.issueDate,
            return_date:req.body.returnDate,
            

        })
        res.status(201).send({msg:"Book Issued Successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(400).send({msg:"Not able to Issue book"})
    }
}

module.exports={bookIssue}