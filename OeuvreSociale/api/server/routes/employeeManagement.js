const express = require("express");

const { getEmployee, addEmployee,deleteEmployee,updateEmployee, getEmployeepage} = require("../controllers/employeecontroller");

const router=express.Router();

router.get("/employees",getEmployeepage);
router.get("/employees/:id",getEmployee);
router.post("/employee",addEmployee);
router.put("/employee/:id",updateEmployee);
router.delete("/employee/:id",deleteEmployee);

module.exports=router;