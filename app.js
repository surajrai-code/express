const express = require('express');

const bodyParser= require('body-parser'); //7.yahan bodyparser mai sara conntent le rha hun IMPORTING

const app = express();

app.use(bodyParser.urlencoded ({extended: false})); //8.ye ek middleware register karta hai, aur end mai next hota hai...ye bas form ki body parse karta hai not json,files unke liye dusra parser chaiye honge....ye apne aap parse kr dega jo body form se aa ri hai...

app.use('/', (req, res, next) => {  
    console.log('in the next middleware3');
    // res.send("<h1>This is first express js</h1>")
    next(); //4. ye wala everytime work krega jab jab hum koi bhi request karenge(pehle ye chalega then hum jab dusre request krenge to vo continue hoga)
})

app.use('/add-product', (req, res, next) => { //1. isme '/add-product' path dala hai.
    console.log('in the next middleware1');
    res.send("<form action='/product' method='POST'><input type='text' name='title'><input type='text' name='size'><button>Add Product</button></form>")
    // next();    //2. hume next daalne ki jarurat nahi hai kyunki response ek baar ayega...
})
app.post('/product',(req, res, next)=>{
    console.log(req.body);//6. isme jo data aa rha hai vo abhi parsed ni hai isliye console mai undefined aayega, req.body does not parse the incoming request body isliye ek parser register karna padhega install krna padhega...npm install --save body-parser...
    res.redirect('/p');  //5.ye mujhe /p pe return kar dega...awwesome feature of express js.
})
app.use('/', (req, res, next) => {  //3. '/' ka mtlb bas ye hona chaiye aur baaki kuch bhi daal lo chalega
    console.log('in the next middleware2');
    res.send("<h1>This is express js</h1>")
})

app.listen(3000, () => {
    console.log('Request has been made');
})
// 9.hum app.use ke jagah app.post bhi likh skte hain if post request hai to, app.put, patch, delete bhi karenge aage.