const express = require("express");
const {studentinsert,DisplayStudent,DeleteStudent}=require("../controllers/studentcontroller");
const router = express.Router();
router.post("/std_insert",studentinsert);
router.get("/student",DisplayStudent);
router.delete("/delete/:id",DeleteStudent);
module.exports=router;