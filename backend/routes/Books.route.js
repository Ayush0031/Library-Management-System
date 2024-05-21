const express =require("express");
const addBook = require("../controller/Books.controller");
const router=express.Router();

router.post("/addBook",addBook)
module.exports=router;