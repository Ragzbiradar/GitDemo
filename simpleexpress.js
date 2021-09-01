var express=require('express')
var cors=require('cors')
var app=express()
app.use(cors())
app.use(express.json())
app.listen(5055,()=>{
    console.log("started")
})
var obj={Name:"Harry",Designation:"SE",Salary:3000,Courses:["Java","react","Node","JS","Mongo"]}
var items=[{itemname:"Phone",price:30000,quantity:20},{itemname:"Pencil",price:30,quantity:890},{itemname:"bag",price:2340,quantity:90},{itemname:"Charger",price:3000,quantity:21}]
app.get("/",(req,res)=>{

res.send(obj)
})
app.post("/",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})






