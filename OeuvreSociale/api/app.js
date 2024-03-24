const express =require("express");
const dotenv =require("dotenv").config();
const bodyParser =require("body-parser");
const mongoose = require ("mongoose");
const {connectDB}=require('./server/config/db');
const router = require('./server/routes/admin.js');
const employeeRouter = require('./server/routes/EmployeeManagement.js');
const typeRequestRouter = require('./server/routes/requestType.js');
const requestRouter = require('./server/routes/request.js');
const MongoStore =require('connect-mongo');
const user =require('./server/models/user');

 
const session = require('express-session');



const app = express();
const cors = require('cors');
/** */
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
const port = 8000|| process.env.port;

// app.use(session({
//     secret: 'keyboard cat',
//     resave :false,
//     saveUninitialized :true,
//     store :MongoStore.create({  
//     mongoUrl :process.env.mongodb_url 

//     })
// }));


/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});
  
app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

/**api routes*/
app.use('/api',router);
app.use('/api',employeeRouter);
app.use('/api',typeRequestRouter);
app.use('/api',requestRouter);


//function insertuserData(){
   // user.insertMany([
   // {
      //  idEmployee:"1",
       // familyName:"meflah",
       // firstName:"yousra",
       // password:"esi",
       // email:"y.meflah@esi.sba.dz",
       // phoneNumber:"1234",
       // sexe:"f",
       // isMarried:false,
        //numberOfChild
       // bankAccount:"1234",
       // monthlySalary:12,
       // dateStartJob
        //isCommit:true
       // role
       // profilePicture:
   // },
   
   // ])
    

//} 


//} 

//insertuserData();










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

