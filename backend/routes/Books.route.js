const express =require("express");

const{ getAllBooks,addBook} = require("../controller/Books.controller.js");
const router=express.Router();

router.post("/add",addBook)
router.get("/all",getAllBooks)
module.exports=router;