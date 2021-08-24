var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(express.urlencoded({extended:true}))  //use content form body directly
app.use(express.static("public"))
app.use(express.json())
var server = app.listen(8087,function() {
    console.log("Server ready")
})

var item=[
    {
        itemname:"Pen",
        price:20,
        quantity : 100
    },
    {
        itemname:"Book",
        price:30,
        quantity : 150
    }
 
 ]

app.get("/showitems",function(req,res) {
    res.send(item)
    console.log(req.param("name"))
    console.log(res.statusCode)
})

app.post("/",function(req,res) {
    var data = req.body
    console.log(data)
    item.push(data)
    res.send("data accepted")
    res.redirect("/")
})

app.put("/",function(req,res) {

})

app.delete("/",function(req,res) {

})
app.get("/ab?cd",function(req,res) {       //ab+cd  or ab*cd  or /ab(cd)?e
    res.send("Hello Ragz")
   
})

app.get(/.*hello$/,function(req,res) {      
    res.send("Hello Ragz")
   
})

app.get("/show/:id/:name",function(req,res) {      
    console.log(req.params['id'])
    console.log(req.params['name'])
   res.send('data received')
})


app.route("/items")
.get(function(req,res){
    res.send("get request")
})
.post(function(req,res){
    res.send("post request")
})
.put(function(req,res){
    res.send("put request")
})

// var router=express.Router()
// router.use(function(req,res,next){
//     console.log("Request Received")
//     next()
// })
// router.get("/samplerouter",function(req,res){
//     res.send("get request received")
//   //  res.end()
// })
// router.post("/samplerouter",function(req,res){
//     res.send("post request received")
//     res.end()
// })
// router.put("/samplerouter",function(req,res){
//     res.send("put request received")
//     res.end()
// })
// app.use(router)



// app.post("/",function(req,res){
//     var data=req.body
//     console.log(data)  
//     items.push(data)
//     res.redirect("/")
// })