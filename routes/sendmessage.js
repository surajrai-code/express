const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/',(req,res,next)=>{
    fs.readFile("message.txt",(err,data)=>{
        if(err)
        {
            console.log(err)
            data="No Chat exists"
        }
        res.send(`${data}<form  action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="message"><input type="hidden" type="text" name="username" id="username" ><button type="submit">Send Message</button></form>`);
        next();
    })
   
})

router.post('/',(req,res)=>{
    fs.writeFile('message.txt', `${req.body.username}:${req.body.message}`,{flag:"a"}, 
    (err)=>{
       err ? console.log(err): res.redirect('/'); 
    });
    console.log(req.body);
})

//flag;a likhne se message.txt mai purana vala bhi rhega.
module.exports=router;