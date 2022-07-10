const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = mongoose.model('user')

 router.get('/',(req,res)=>{
      res.render("addOrEdit",{
          title : "Insert Users"
      });
 });

  router.get('/list',(req,res)=>{
    user.find((err,doc)=>{
        if(!err)
        {
            res.render('list',{
                title : "Users List",
                list : doc
            });
        }
        else
        {
            console.log("error is getting the data : " + err)
        }
    })
      
  });


  router.post('/users',(req,res)=>{
    if (req.body._id == '')
    insertRecord(req, res);
    else
    updateRecord(req, res);
  });



function insertRecord(req,res)
{
    const User = new user();
      User.fullname = req.body.fullname;
      User.email = req.body.email;
      User.contact = req.body.contact;
      User.city = req.body.city;
      User.save((err,doc)=>{
        if(!err)
        {
            res.redirect('/list')
        }
        else
        {
              console.log("error in inserting : " + err)
        }

      });
}



function updateRecord(req, res) {
    user.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/list'); }
        
        else
        {
                console.log('Error during record update : ' + err);
        }
    });
 }



 router.get('/delete/:id', (req, res) => {
    user.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
 });



router.get('/:id', (req, res) => {
    user.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("addOrEdit", {
                title: "Update User",
                user : doc
            });
        }
    });
 });
module.exports = router;