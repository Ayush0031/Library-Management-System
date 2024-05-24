const express =require("express");
const { bookIssue } = require("../controller/Records.controller.js");
const { getAllBooks } = require("../controller/Books.controller.js");
const router=express.Router();

router.post("/issue",bookIssue)
router.get("/all",getAllBooks)

module.exports=router;