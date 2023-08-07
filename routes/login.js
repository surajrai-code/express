const express=require('express');
const router=express.Router();
const fs=require('fs');


router.use('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/logi" method="POST"><input id="username" type="text" name="title"><button >Login</button></form>');
    
})
router.post('/logi',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
module.exports=router;