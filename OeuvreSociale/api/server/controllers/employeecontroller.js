//from new branch
const Employee= require("../models/user");
//Get all employees
 const getEmpolyees = async(req,res)=>{
    try{
        const Employees =await Employee.find().select("-password");
        res.status(200).json(Employees)
    }
    catch(error){
       res.status(404).json({message:error.message});
    }
}
//create 
const addEmpolyee = async(req,res)=>{
    const newEmployee= new Employee(req.body);
    try{
        const saveEmployee= await newEmployee.save();
        res.status(200).json(saveEmployee);
        console.log("employee has been created");
    }
    catch(error){
       
        // Handle other errors
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
//update
const updateEmpolyee=async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id);
        const updatedEmployee= await Employee.findByIdAndUpdate(req.params.id,{
            $set:req.body,
         },{new:true})
         res.status(200).json(updatedEmployee); 
        console.log("Employee has been updated");
    } 
        catch(error){
       console.error(error);
        res.status(500).json({ error: 'Internal server error' });

        }
    };
//delete 
const deleteEmpolyee=async(req,res)=>{
    try{

        await Employee.findByIdAndDelete(req.params.id)
        res.status(200).json("Employee has been deleted");   
       
       }catch(err){
           res.status(500).json(err);
       }};
//pagenation & search
const getEmpolyeepage=  async(req,res)=>{
   //current page
   const page=req.query.page || 1;
   const EmployeesPerPage =3;
   const skipEmployees=(page-1)*EmployeesPerPage;
   
   try{
    const Employees =await Employee.find({
$or:[
   {idEmployee:{$regex:req.query.search}},
   {familyName:{$regex:req.query.search}},
    {email:{$regex:req.query.search}},
   // {monthlySalary:{$regex:req.query.search}},
    {role:{$regex:req.query.search}}
]

    }).select("-password").skip(skipEmployees).limit(EmployeesPerPage);
    res.status(200).json(Employees)
}
catch(error){
   res.status(404).json({message:error.message});
}
}      
module.exports = { getEmpolyees ,addEmpolyee,deleteEmpolyee,updateEmpolyee,getEmpolyeepage};

