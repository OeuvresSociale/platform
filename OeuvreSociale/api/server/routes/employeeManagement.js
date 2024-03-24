const express = require("express");

const { getEmpolyees, addEmpolyee,deleteEmpolyee,updateEmpolyee, getEmpolyeepage} = require("../controllers/employeecontroller");
const {verifyRole} = require ('../middleware/roles.js');
const {Auth}=require('../middleware/auth.js')
const router=express.Router();

router.get("/employees",Auth,verifyRole(['president','tresorerie','membre']),getEmpolyeepage);
router.post("/employee",Auth,verifyRole('president'),addEmpolyee);
router.put("/employee/:id",Auth,verifyRole('president'),updateEmpolyee);
router.delete("/employee/:id",Auth,verifyRole('president'),deleteEmpolyee);

module.exports=router;