const mongoose =require("mongoose")

const publisherSchema=mongoose.Schema({
    publisherId:{
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
    contactInfo:{
        type:String,
        required: true
    },
     
    books: [{ type: String, ref: 'Books' }],
});

module.exports=new mongoose.model("publishers",publisherSchema);