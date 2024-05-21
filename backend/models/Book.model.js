const mongoose =require("mongoose")

const bookSchema=mongoose.Schema({
    isbn:{
        type:String,
        required: true,
        unique:true,
    },
    title:{
        type:String,
        required: true
    },
    genre:{
        type:String,
        required: true
    },
    publication_date:{
        type:String,
        required: true
    },
    publisher:{
        type:String,
        ref:'Publisher',
        required: true,
        
    },
    authors: [{ type: String, ref: 'Author' }],
});

module.exports=new mongoose.model("books",bookSchema);