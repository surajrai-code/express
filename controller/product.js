const path=require('path');
const rootdir=require('../utl/path');


exports.getproduct=(req, res, next) => { 
    res.sendFile(path.join(rootdir,'views', 'add-product.html'));
}
