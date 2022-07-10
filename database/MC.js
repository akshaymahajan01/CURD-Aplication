const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/USER_MANAGMENT_SYS",{
        useNewUrlParser : true,
        useUnifiedTopology : true
},(err)=>{
    if(!err) 
    {
         console.log('connected to the database');
    }
    else
    {
        console.log('error in the connection  : ' + err);
    }

}) 

require('./model')