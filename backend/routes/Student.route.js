const express =require("express");
const { addStudent, getAllStudent, deleteStudent } = require("../controller/Student.controller");

const router=express.Router();

router.post("/add",addStudent)
router.get("/all",getAllStudent)
router.get("/delete",deleteStudent)

module.exports=router;