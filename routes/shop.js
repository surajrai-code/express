// jo user dekhega
const express=require('express');

const router=express.Router();


router.use('/as', (req, res, next) => {
    console.log('in the next middleware2');
    res.send("<h2>ohh u finally reach here</h2>")
    next();
}) //yaad rkhna use mai to kuch bhi ho use ho jayega lekin agar get lagate to ye kaam ni karta kyunki kuch get hi ni ho rha hai...

module.exports=router;