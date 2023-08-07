const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
//u module ko yhan importing


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/shop',shoproutes); 
app.use('/admin',adminRoutes); ////only routes starting with /admin will go to adminRoutes, this is called FILTERING.

//indono ko ulta sulta kr do koi dikkat ni

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>'); //yahan pe status bhi dal diya hai ki agar ye aaya to, status 404 bne ki page not found 
})

app.listen(3000, () => {
    console.log('Request has been made');
})
