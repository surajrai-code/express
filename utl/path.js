const path = require("path");

module.exports=path.dirname(process.mainModule.filename);
// dirname  us path ki directory name return karega
// process ek global variable hai jo har file m available hota hai.
// mainmodule ye main module jab app start ki to kon sa (app.js)

// ye karne se, vahan path ke liye __DIRNAME, "../" nahi likhna padhega.