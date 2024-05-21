const express =require("express")
const cors=require("cors");
require('dotenv').config()
const { mongoose } = require("mongoose");
const bookRoute=require("./routes/Books.route")
console.log(process.env)
const PORT=process.env.PORT;
const URI=process.env.MongoDBURI;
const app=express()

app.use(cors())

try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error",error)
}
app.use("/api/books",bookRoute)
app.listen(PORT,()=>{
    console.log(`Server is Listening at port ${PORT}`)
})