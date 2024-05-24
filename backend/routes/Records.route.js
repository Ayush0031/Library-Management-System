const express =require("express");
const { bookIssue } = require("../controller/Records.controller.js");
const router=express.Router();

router.post("/issue",bookIssue)

module.exports=router;