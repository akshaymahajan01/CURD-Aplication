const mongoose = require('mongoose');


var userschema = new mongoose.Schema({

  fullname : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  contact : {
    type : Number,
    required : true
  },
  city : {
    type : String,
    required : true
  }
});

 mongoose.model('user',userschema);



