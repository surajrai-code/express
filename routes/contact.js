const express=require('express');
const router=express.Router();
const path=require('path');
const rootdir=require('../utl/path'); 

router.use('/contactus',(req,res,next)=>{
    // res.send("<h1>hello we are in </h1>")
    res.sendFile(path.join (rootdir,'views', 'contactfor.html'));
})

module.exports=router;