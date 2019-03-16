const mongoose = require('mongoose');

mongoose.Promise=global.Promise;

const db= require('../../config/database');
mongoose.connect(db.mongoURI,{
useMongoClient:true
}).then(()=>console.log("Mongoose Connected"))
.catch(err => console.log(err));


module.exports = {mongoose}