const Router = require('express');

const router=Router();

//END POINTS for admin interface - for now it is for bith admin and employee

/**POST METHODS */
router.route('/register').post((req,res)=>res.json('register route')); //register user
router.route('/registerMail').post();  //send an email
router.route('/authentication').post();  // authenticate user
router.route('/login').post();  // login in app


/**GET METHODS */
router.route('/user/:username').get();   //get user with username
router.route('/generateOTP').get();  //generate random OTP
router.route('/verifyOTP').get();   //verify generate OTP
router.route('/createResetSession').get();  //reset all the variables


/**PUT METHODS */
router.route('/updateUser').put();   //update user profile
router.route('/resetPassword').put();   //use to reset a password







module.exports=router;
