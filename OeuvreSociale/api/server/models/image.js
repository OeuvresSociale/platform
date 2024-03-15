const mongoose = require('mongoose');

const schema = mongoose.Schema;

const imageSchema = new schema({
    name:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      
    }
   
})

module.exports=mongoose.model('imageModel',imageSchema);