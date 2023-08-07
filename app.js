const express=require('express');
const app=express();

const bodyParser = require('body-parser');

const loginpage=require('./routes/login');
const sendmessagepage=require('./routes/sendmessage');
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginpage);
app.use(sendmessagepage);

app.listen(3000,()=>{
    console.log('Request has been sent');
})