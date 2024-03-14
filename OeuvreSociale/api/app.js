const express =require("express");
const dotenv =require("dotenv").config();
const bodyParser =require("body-parser");
const mongoose = require ("mongoose");
const connectDB=require('./server/config/db');
const router = require('./server/routes/admin.js');
const employeerouter = require('./server/routes/EmployeeManagement.js');
//const routerr = require('router/employee.js');

const session = require('express-session');



const app = express();
app.use(express.json());
const port = 8000|| process.env.port;




/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});
  
/**api routes*/
app.use('/api',router);
app.use('/api',employeerouter);



//connection to DB
connectDB().then(()=>{
    try {
        app.listen(port , ()=>{
            console.log(`app listening on port ${port}`);
        })
        
    } catch (error) {
      console.log('cannot conncet to the server...! ');  
        
    }
}).catch(error =>{
    console.log('Invalid database conncetion...! ');  
})

