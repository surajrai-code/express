const express=require('express');
const path=require('path');
const rootdir=require('../utl/path');  //jo utl vala bnaya hai usko import kiya hai bas, ye clean coding ke liye hain. Aage ../ likha hai jisse vo ek step uper jaye pehle.

const router=express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join (rootdir,'views', 'shop.html'));//yahan pe rootdir daal diya vo __dirname, "../" ye daalne ki jarurat ni hai(__dirname ek global variable hai )
    // path.join ek path return karega lekin ye path banayega by concating different segment
}) 
module.exports=router;