const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');
const adminRoutes=require('./routes/admin');
const contacting=require('./routes/contact');
const shoproutes=require('./routes/shop');

const app = express();

app.use('/shop',shoproutes); 
app.use('/admin',adminRoutes);
app.use(contacting);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));//iske vajah se hi hum css files ko html files mai access kar pa rhe hain varna ni kar paate html file css ko access ni kar pata, ye koi bhi request lega jo tries to find some files like .css .js aur usko public ko forward kar dega.

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','notfound.html')) ; //yahan levelup karne ki jarurat ni hai.
})

app.listen(3000, () => {
    console.log('Request has been made');
})