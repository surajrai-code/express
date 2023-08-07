// jo admin dekhega bas
const express= require('express');

const router=express.Router(); //1.express m ek router function hai jo kaam karta hai routers ke liye.

// 4) /admin/add-product => GET
// 6. vahan app.js mai /admin diya hai saath mai to yahan ye manega.
router.use('/add-product', (req, res, next) => { //2.jaise vahan app.use kiya tha vaise h , router.get bhi kar skte hain
    console.log('in the next middleware1');
    res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><input type='text' name='size'><button>Add Product</button></form>")
})

// 5) /admin/add-product => POST
router.use('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/p'); //3.ye automatically /p pe le ja rha hai ....
})

router.get('/p', (req, res, next) => {
    res.send(`<html><h1>Hello, this is /p</h1></html>`)

})

module.exports=router;