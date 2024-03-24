const express = require("express");

const { getEmpolyees, addEmpolyee,deleteEmpolyee,updateEmpolyee, getEmpolyeepage} = require("../controllers/employeecontroller");
const {verifyRole} = require ('../middleware/roles.js');
const router=express.Router();

router.get("/employees",getEmpolyeepage);
router.post("/employee",verifyRole('admin'),addEmpolyee);
router.put("/employee/:id",verifyRole('admin'),updateEmpolyee);
router.delete("/employee/:id",verifyRole('admin'),deleteEmpolyee);

module.exports=router;