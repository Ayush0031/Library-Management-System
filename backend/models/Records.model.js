const mongoose =require("mongoose")

const recordSchema = new mongoose.Schema({
    student: { type: String, ref: 'Student', required: true },  
    book: { type: String, ref: 'Book', required: true },        
    borrowing_date: { type: Date, required: true },             
    return_date: { type: Date },                               
    fine: { type: Number, default: 0 }                          
});

module.exports=mongoose.model("Records",recordSchema)