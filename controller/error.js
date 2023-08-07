const path=require('path');
const rootdir=require('../utl/path');

exports.error=(req, res, next)=>{
    res.status(404).sendFile(path.join(rootdir,'views','notfound.html')) ; //yahan levelup karne ki jarurat ni hai.
}