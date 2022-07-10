const express = require('express')
const mongoose = require('mongoose')
require('./database/MC')
const bodyparser = require('body-parser')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const { allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const path = require('path')
const router = require('./router/router')


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));


app.use('/', router);



app.engine('hbs',exphbs.engine({extname : 'hbs' , defaultLayout : 'mainlayout' , layoutsDir : __dirname + '/views/layouts/',handlebars : allowInsecurePrototypeAccess(handlebars)}));
app.set('view engine' , 'hbs')



app.listen(1111,()=>console.log('server started'));

