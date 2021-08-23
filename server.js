var express=require('express')
var app=express()
app.use(express.urlencoded({extended:true}))
app.listen(8089,()=>{
    console.log("started")
})
app.get("/",(req,res)=>{
res.send("Hello from server")
})
app.post("/",(req,res)=>{
    console.log(req.body)
})