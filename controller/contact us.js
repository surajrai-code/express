const path=require('path');
const rootdir=require('../utl/path');

exports.contacting=(req,res,next)=>{
    // res.send("<h1>hello we are in </h1>")
    res.sendFile(path.join (rootdir,'views', 'contactfor.html'));
}