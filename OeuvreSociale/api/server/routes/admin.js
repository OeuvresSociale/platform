const Router = require('express');

const router=Router();

const controller =require('../controllers/adminController');
const Auth = require('../middleware/auth.js');
const { localVariables } = require('../middleware/auth.js');
const {registerMail} = require('../controllers/mailer');

//END POINTS for admin interface - for now it is for bith admin and employee

/**POST METHODS */
router.route('/register').post(controller.register); //register user
//router.route('/registerMail').post(registerMail);  //send an email
router.route('/authentication').post((req,res)=>res.end());  // authenticate user
router.route('/login').post(controller.login);  // login in app
router.route('/sendEmail').post(controller.sendEmail); 
router.route('/forgotPassword').post(controller.forgotPassword); 

/**GET METHODS */
router.route('/user/:idEmployee').get(controller.getUser);   //get user with idEmployee
router.route('/generateOTP').get(controller.generateOTP);  //generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP);   //verify generate OTP
router.route('/createResetSession').get(controller.createResetSession);  //reset all the variables
router.route('/logout').get(controller.logout)

/**PUT METHODS */
router.route('/updateUser').put(controller.updateUser);   //update user profile
router.route('/resetPassword').put(controller.resetPassword);   //use to reset a password







module.exports=router;






module.exports=router;
