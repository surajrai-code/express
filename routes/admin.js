const express= require('express');
const router=express.Router(); 
const path=require('path');
const rootdir=require('../utl/path');

router.use('/add-product', (req, res, next) => { 
    // console.log('in the next middleware1');
    res.sendFile(path.join(rootdir,'views', 'add-product.html'));
})


module.exports=router;