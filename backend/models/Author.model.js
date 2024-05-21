const mongoose =require("mongoose")

const authorSchema=mongoose.Schema({
    authorId:{
        type:String,
        required: true, 
        unique:true,
    },
    name:{
        type:String,
        required: true
    },
    biography:{
        type:String,
        required: true
    },
    books: [{ type: String, ref: 'Books' }],
});

module.exports=new mongoose.model("authors",authorSchema);