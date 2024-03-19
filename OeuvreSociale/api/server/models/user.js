const mongoose = require ('mongoose');

const schema = mongoose.Schema;
const userSchema = new schema ({
    idEmployee:{
        type:String,
        required : true,
        unique: [true,"id Exist"]
    },
    familyName:{
        type:String,
        required : true,
        unique : false
        
    },
    firstName:{
        type:String,
        required:true,
        unique : false
        
    },
    password:{ 
        type:String,
        required:true,
        unique : false
      //  default : idEmployee
    },
    email:{
    type: String,
    required : true,
    unique: true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique : true
    },
    sexe:{
        type:String,
        required:true,
        
    },
    isMarried:{
        type:Boolean,
        required:true,
        
    },
    numberOfChild:{
        type:String,
        required:false,
        unique : false
    },
    bankAccount:{
        type:String,
        required:true,
        unique : true
    },
    monthlySalary:{
        type:Number,
        required:true,
        unique : false
    },
    dateStartJob:{
        type:Date,
        required:false
        
    },
    isCommit:{
        type:Boolean,
        required:true
        
    },
    role:{
        type:String,
        required:true,
        enum:['member','admin','tresorier,employee'],
        default :"employee"
       
    },
    profilePicture:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        unique : false,
        ref: 'imageModel'
    },


});


const UserModel = mongoose.model('user',userSchema);

module.exports = UserModel;
