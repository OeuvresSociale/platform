const jwt= require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const dotenv =require("dotenv").config();

/** auth middleware */
//const token = req.cookies.token; 
async function Auth(req, res, next){
    try {
        
        // access authorize header to validate request
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token,JWT_SECRET); //If the token is valid, it extracts the user information (decoded payload) from the token and attaches it to the req
        req.user = decodedToken;
        next()
    } catch (error) {
        res.status(401).json({ error : "Authentication Failed!"})
    }
}


function localVariables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}





module.exports = {Auth,localVariables}