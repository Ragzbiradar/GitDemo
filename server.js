var express=require('express')
var app=express()
app.use(express.urlencoded({extended:true}))
app.listen(5055,()=>{
    console.log("started")
})
app.get("/",(req,res)=>{
res.send("Hello from server")
})
app.get("/home",(req,res)=>{
res.send("Hello from server home")
})
app.post("/",(req,res)=>{
    console.log(req.body)
})
