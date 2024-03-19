const express = require("express");
const {upload }= require("../controllers/upload");
const  { getallRequests ,getRequest,getMyRequests,createRequest,suiviRequest} = require("../controllers/requestController");

const router=express.Router();

router.get("/Requests",getallRequests);//
router.get("/Request/:id",getRequest);//
router.get("/MyRequests/:employeeId",getMyRequests);//
router.post("/Requests", upload().array('files', 10),createRequest);//
router.put("/Requests/:id",suiviRequest);//
module.exports=router;