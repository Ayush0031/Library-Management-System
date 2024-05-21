const mongoose =require("mongoose")

const studentSchema=mongoose.Schema({
    studentId:{
        type:String,
        required: true,
        unique:true,
    },
    name:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
     
    borrowed_books: [{ type: String, ref: 'Books' }],
});

module.exports=new mongoose.model("students",studentSchema);