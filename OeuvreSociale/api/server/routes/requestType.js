const express = require("express");

const  { getTypesRequest,getTypeRequest ,addTypeRequest,deleteTypeRequest,updateTypeRequest} = require("../controllers/requestTypeControllers");
const {verifyRole} = require ('../middleware/roles.js');

const router=express.Router();
//
router.get("/typesRequest",getTypesRequest);
router.get("/typesRequest/:id",verifyRole(['admin','tresorier','member']),getTypeRequest);
router.post("/typesRequest",addTypeRequest);
router.put("/typesRequest/:id",verifyRole('admin'),updateTypeRequest);
router.delete("/typesRequest/:id",verifyRole('admin'),deleteTypeRequest);

module.exports=router;