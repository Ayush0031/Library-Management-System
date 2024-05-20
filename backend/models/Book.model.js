const mongoose =require("mongoose")

const bookSchema=mongoose.Schema({
    isbn:{
        type:String,
        unique:true,
    },
    title:{
        type:String
    },
    genre:{
        type:String
    },
    publicationDate:{
        type:date,
    },
    publisher:{
        type:String
    }
});

module.exports=new mongoose.model("books",bookSchema);