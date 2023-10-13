const mongoose = require('mongoose');
const {Schema} = mongoose;
const employeeschema = new Schema({
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    role:{
        type:String,
    
    },
    email:{
        type:String,
        required:true,
    },
})
module.exports = mongoose.model("employee",employeeschema)