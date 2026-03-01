const express = require("express") ;
const app = express() ;
const sum = require("./sum.js")

const PORT = 3000 ;



app.listen(PORT, ()=>{
    console.log("app is listensing") ;
})

app.get("/home", (req, res)=>{
    res.json({
        msg: "Hi, I am root",
    }) ;
})

app.get("/getSum/:a/:b", async(req, res)=>{
    const{a, b} = req.params ;

    res.json({
        ans : sum(parseInt(a), parseInt(b)) ,
    })


})