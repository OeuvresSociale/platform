const express = require("express");

const { getEmpolyees, addEmpolyee,deleteEmpolyee,updateEmpolyee, getEmpolyeepage} = require("../controllers/employeecontroller");

const router=express.Router();

router.get("/employees",getEmpolyeepage);
router.post("/employee",addEmpolyee);
router.put("/employee/:id",updateEmpolyee);
router.delete("/employee/:id",deleteEmpolyee);

module.exports=router;