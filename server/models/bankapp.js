const mongoose = require('mongoose');

const BankApp = mongoose.model('BankApp',{
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    zipCode:{
        type:Number,
        required:true
    },
    ssn:{
        type:Number,
        required:true
    },
    creditCardNo:{
        type:Number,
        required:true
    },
    passkey:{
        type:String,
        required:true
    }
});

module.exports= {BankApp};