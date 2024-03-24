const express = require("express");
const {upload }= require("../controllers/upload");
const  { createLaonRequest,getallRequests ,getRequest,getMyRequests,createRequest,suiviRequest} = require("../controllers/requestController");

const {Auth}=require('../middleware/auth');
const {verifyRole} = require ('../middleware/roles.js');
const {checkPermission,permissions} = require ('../middleware/permissions.js');
const router=express.Router();

router.get("/Requests",Auth,verifyRole(['admin','tresorier','member']),getallRequests);//
router.get("/Request/:id",Auth,checkPermission(permissions.createRequest),getRequest);//
router.get("/MyRequests/:employeeId",Auth,getMyRequests);//
router.post("/Requests", Auth,upload().array('files', 10),createRequest);
router.post("/Requestsl",Auth,upload().array('files', 10),createLaonRequest);//
router.put("/Requests/:id",Auth,suiviRequest);//
module.exports=router;