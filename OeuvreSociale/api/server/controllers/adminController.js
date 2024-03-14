/**
 * for now i will write all controllers in this page after finishing the youtube video and understaund how does 
 * the controllers work I'll change the code to the right place
*/

const UserModel =require('../models/user.js'); 
const bcrypt =require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
const jwtSecret = process.env.JWT_SECRET;
const dotenv =require("dotenv").config();
const otpGenerator =require('otp-generator');
const nodemailer = require('nodemailer');

let useremail; //email of user so we can send him an otp email

/** POST: http://localhost:8000/api/register 
 * @param : 
 * { "idEmployee": "441",
    "familyName": "wwb",
    "firstName": "YACINE",
    "password": "esi",
    "email": "w11s111el@esi.sba.dz",
    "phoneNumber": "92233331117724",
    "sexe": "f",
    "isMarried": "false",
    "bankAccount": "1911111043001234",
    "monthlySalary": "12",
    "isCommit": "false",
    "role": "employee"
} 
*/

//post : register new employee with hash password and testing existance

async function register(req,res){

    try {
        const { idEmployee, password, email, firstName,dateStartJob,role,profilePicture,
            familyName,phoneNumber,sexe,isMarried,bankAccount,monthlySalary,isCommit,numberOfChild
             } = req.body;        

        // check the existing user
        async function checkExistingUser(idEmployee) {
            try {
                const user = await UserModel.findOne({ idEmployee });
                if (user) {
                    throw new Error("Please use a unique idEmployee");
                }
                return true; // No user found, idEmployee is unique
            } catch (error) {
                throw new Error(error.message);
            }
        }
        

        // check for existing email
        async function checkExistingEmail(email) {
            try {
                const user = await UserModel.findOne({ email });
                if (user) {
                    throw new Error("Please use a unique email");
                }
                return true; // No user found, email is unique
            } catch (error) {
                throw new Error(error.message);
            }
        }
         // check for existing phoneNumber
         async function checkExistingPhoneNumber(phoneNumber) {
            try {
                const user = await UserModel.findOne({ phoneNumber });
                if (user) {
                    throw new Error("Please use a unique phoneNumber");
                }
                return true; // No user found, phoneNumber is unique
            } catch (error) {
                throw new Error(error.message);
            }
        }
         // check for existing bankAccount
         async function checkExistingBankAccount(bankAccount) {
            try {
                const user = await UserModel.findOne({ bankAccount });
                if (user) {
                    throw new Error("Please use a unique bankAccount");
                }
                return true; // No user found, bankAccount is unique
            } catch (error) {
                throw new Error(error.message);
            }
        }


        Promise.all([checkExistingUser,checkExistingEmail,checkExistingPhoneNumber, checkExistingBankAccount])
            .then(() => {
                if(password){
                    bcrypt.hash(password, 10)
                        .then( hashedPassword => {
                             
                            const user = new UserModel({
                                firstName,
                                password: hashedPassword,
                                 email,
                                idEmployee,
                                familyName,
                                phoneNumber,
                                sexe,
                                isMarried,
                                numberOfChild,
                                bankAccount,
                                monthlySalary,
                                dateStartJob,
                                isCommit,
                                role,
                                profilePicture
                            });

                            // return save result as a response
                            user.save()
                                .then(result => res.status(201).send({ msg: "User Register Successfully"}))
                                .catch(error => res.status(500).send({error}))

                        }).catch(error => {
                            return res.status(500).send({
                                error : "Enable to hashed password"
                            })
                        })
                }
            }).catch(error => {
                return res.status(500).send({ error : "promisese error"})
            })


    } catch (error) {
        return res.status(500).send({ error : "debut error"});
    }

}


// async function login(req,res){
//     res.json('login route');
// }
/** POST: http://localhost:8080/api/login 
 * @param: 
 * {"idEmployee" : "51",
  "password" : "esi"
   }   
*/

//post : login with jwt session

async function login(req,res){

    const { idEmployee, password } = req.body;

    try {
        
        UserModel.findOne({idEmployee})
            .then(user => {
               
               bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if(!passwordCheck) return res.status(400).send({ error: "Incorrect password"});

                        // create jwt token
                        const token = jwt.sign({idEmployee : user.idEmployee
                                    }, jwtSecret , { expiresIn : "24h"});
                                    res.cookie('token', token, { httpOnly: true });
                          useremail=user.email;
                        return res.status(200).send({useremail,
                            msg: "Login Successful...!",
                            // idEmployee: user.idEmployee,
                            // firstName:user.firstName,
                            // token
                        });                                    

                    })
                    .catch(error =>{
                       
                        return res.status(400).send({ error: "Password does not Match"})
                    })
            })
            .catch( error => {
                return res.status(404).send({ error : "idEmployee not Found"});
            })

    } catch (error) {
        return res.status(500).send({error});
    }
}


//get : lget a user
/** GET: http://localhost:8000/api/user/id */

async function getUser(req, res) {
    const { idEmployee } = req.params;

    if (!idEmployee) {
        return res.status(400).send({ error: "Invalid user" });
    }

    try {
        const user = await UserModel.findOne({ idEmployee }).exec();
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        // Remove password from user object
        const { password, ...rest } = user.toJSON();
       
        return res.status(200).send(rest);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal server error" });
    }
}
// UserModel.findOne({ firstName }, function(err, user) {
// MongooseError: Model.findOne() no longer accepts a callback
            

/** PUT: http://localhost:8000/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
//put : update user 
async function updateUser(req, res) {
    try {
       // const { userId } = req.user;
       const id = req.query.id;
        // if (!userId) {
        //     return res.status(401).send({ error: "User Not Found" });
        // }
        if(id){
            const body = req.body;

            const result = await UserModel.updateOne({ _id: id }, body);
            if (result.nModified === 0) {
                return res.status(404).send({ error: "No records were updated" });
            }
            return res.status(200).send({ msg: "Record Updated" });
        }   
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
}


/** GET: http://localhost:8000/api/generateOTP */
async function generateOTP(req,res){
    
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, 
        upperCaseAlphabets: false, specialChars: false})
    res.status(201).send({ code: req.app.locals.OTP })
    
    }
   
/** GET: http://localhost:8000/api/verifyOTP */
async function verifyOTP(req,res){
    const { code } = req.query;
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!'})
    }
    return res.status(400).send({ error: "Invalid OTP"});
}


// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
async function createResetSession(req,res){
    if(req.app.locals.resetSession){
         return res.status(201).send({ flag : req.app.locals.resetSession})
    }
    return res.status(440).send({error : "Session expired!"})
 }
 
// update the password when we have valid session
/** PUT: http://localhost:8000/api/resetPassword */
async function resetPassword(req,res){
    try {
        
       if(!req.app.locals.resetSession) return res.status(440).send({error : "Session expired!"});

        const { firstName, password } = req.body;
        
            try {
                // Find the user by firstName
                const user = await UserModel.findOne({ firstName });
        
                if (!user) {
                    return res.status(404).send({ error: "User not found" });
                }
        
                // Hash the new password
                const hashedPassword = await bcrypt.hash(password, 10);
        
                // Update the user's password
                await UserModel.updateOne({ firstName: user.firstName }, 
                    { password: hashedPassword });

                req.app.locals.resetSession = false; // reset session

                return res.status(201).send({ msg: "Password updated successfully" });
            } catch (error) {
                console.error(error);
                return res.status(500).send({ error: "Internal server error" });
            }
        
        
      
    } catch (error) {
        return res.status(401).send({ error })
    }
}

   /*
**GET
admin - LOG OUT
*/
async function logout(req,res){
    res.clearCookie('token');
    res.json({message:'logout successfuly'});   
}
  
async function sendEmail(req,res){
     
    req.app.locals.OTP = await otpGenerator.generate(6, { lowerCaseAlphabets: false, 
        upperCaseAlphabets: false, specialChars: false})
    res.json(useremail);
    console.log(useremail);
    
    const{to,subject,message}=req.body;   
  
    const transporter = nodemailer.createTransport({
        
        service:'gmail',
        auth: {
             user:process.env.SENDGRID_USERNAME, /// Your Gmail address
             pass:process.env.SENDGRID_PASSWORD  //// Your Gmail password or App Password
        }
    });
    const mailOptions ={
        from:process.env.SENDGRID_USERNAME,
        to:useremail, 
        subject:'Your OTP code',
        text:`Your OTP is: ${req.app.locals.OTP}`
    }
    
    transporter.sendMail(mailOptions, function(error,info){
        if (error){
            console.log({error:"error in transporter"});
        }else{
            console.log('email send :'+ info.response)  ;
        }
    })
}

/**enter email address and compaire with the existant one in db
then send otp to address email and reset the password*/
async function forgotPassword(req,res){ 
    
}

async function uploadImage(req,res){}

async function addRole(req,res){}

module.exports = {
    register,
    login,
    getUser, 
    updateUser,
    generateOTP,
    verifyOTP,
    createResetSession,
    resetPassword,
    logout,
    useremail,
    sendEmail,
    forgotPassword
    
};