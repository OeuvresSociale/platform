const mongoose = require ('mongoose');

const schema = schema.mongoose;
const userSchema = new schema ({
    idEmployee:{},
    familyName:{},
    firstName:{},
    fassword:{},
    email:{},
    phoneNumber:{},
    sexe:{},
    isMarried:{},
    numberOfChild:{},
    bankAccount:{},
    monthlySalary:{},
    dateStartJob:{},
    isCommit:{},
    role:{},
    profilePicture:{},

});





module.exports=mongoose.model('User',userSchema);