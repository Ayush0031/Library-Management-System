const express =require("express");
const { bookIssue, getAllIssuedBooks, returnBook } = require("../controller/Records.controller.js");

const router=express.Router();

router.post("/issue",bookIssue)
router.post("/return",returnBook)
router.get("/all",getAllIssuedBooks)

module.exports=router;