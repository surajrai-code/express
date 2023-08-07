const express=require('express');  //1.express module ko access kar rhe hain in express variable

const app=express(); //2.express module ek function export karta hai isliye ye likha hai

app.use((req,res,next)=>{   //3.ek function pass kra rhe hain jisme 3 arguments hain jo express js pass kr rha hai aur isme next ek function hai jo allow the request to travel on to the next middleware
    console.log('in the middleware');
    next(); //4. ye karne se hi vo next middleware next use vale mai jayega...
});

app.use((req,res,next)=>{
    console.log('in the next middleware');
    //5. isme express js default response header html daal deta hai 
    // res.send("<h1>hello we are also here</h1>");
    res.send('{ key1: value }') //6.isme bhi header html type hi bnega.
})


// const server= http.createServer(app);

app.listen(3000,()=>{
    console.log('Request has been made');
})
// 7. app.listen ek function hai express js mai inside, jo vahin http se create server bna de rha hai, hume bas yahan port dena hai bas by calling. now, yahan se maine const http=require('http') hta diya ab ye pura express js ban gya hai.
// app.listen=function listen(){
//     var server=http.createserver(this)
//     return server.listen.apply(server, arguments);
// }