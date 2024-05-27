const express =require("express");
const { addStudent, getAllStudent } = require("../controller/Student.controller");

const router=express.Router();

router.post("/add",addStudent)
router.get("/all",getAllStudent)

module.exports=router;