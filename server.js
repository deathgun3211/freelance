const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const User = require("./lib/Users")

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static( "public"));
app.use("/css", express.static(__dirname + "public/css"))
app.use("/img", express.static(__dirname + "public/img"))
app.use("/js", express.static(__dirname + "public/js"))

app.set("views", "./views")
app.set("view engine", "ejs")

mongoose.connect("mongodb+srv://admin:vlOORPu8XLGWAXfa@cluster0.zasob.mongodb.net/Freelance", {useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", function (req, res){
    res.render("index")
})
app.get("/about-us", function (req, res){
    res.render("index")
})
app.get("/login", function (req, res){
    res.render("login")
})
app.get("/find-work", function (req, res){
    res.render("find_work")
})
app.get("/add-work", function (req, res){
    res.render("add_work")
})

app.post("/register", function (req, res){
    let username = req.body.username;
    let password = req.body.password;
})



app.listen(3000, function (){
    console.log("server on port 3000")
})