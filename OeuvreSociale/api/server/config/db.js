const mongoose = require ("mongoose");

const connectDB = async()=>{

    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect (process.env.mongodb_url);
        console.log(`DB is connected : ${conn.connection.host}`)
    }catch(error){
        console.log(error);
    }

}

module.exports =connectDB;