const mongoose =require("mongoose")

const recordSchema = new mongoose.Schema({
    studentId: { type: String, ref: 'Student', required: true },  
    isbn: { type: String, ref: 'Book', required: true },        
    borrowing_date: { type: String, required: true },             
    return_date: { type: String },                               
    fine: { type: Number, default: 0 }                          
});

module.exports=mongoose.model("Records",recordSchema)