const express =require("express");
const { bookIssue, getAllIssuedBooks } = require("../controller/Records.controller.js");

const router=express.Router();

router.post("/issue",bookIssue)
router.get("/all",getAllIssuedBooks)

module.exports=router;