const express = require("express")
const app = express()
const Cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const user = require("./db/schemas")
const axios = require("axios")
const circularJSON = require("circular-json")
const { collection } = require("./db/schemas")
var cookieParser = require("cookie-parser");
app.use(cookieParser())

const auth = require("./middlewares/auth");
const blogcollection = require("./db/blogschema")
const blogdoc = require("./db/blogschema");
const { json } = require("express");
app.use(express.json())
app.use(Cors({origin : ["http://localhost:3000"], credentials : true}))
app.use(express.urlencoded({extended: false}));
require("./db/conn");
app.get("/", (req, res) => {
    res.status(200).send("server is fine")
})


app.post("/signup", async (req, res) => {
    try {
        const firstuser = new user({
            uname : req.body.uname,
            pswd : req.body.pswd,
            gmail : req.body.gmail,
            contact : req.body.contact
        })
        const token = await firstuser.genratetoken();
        // const token = jwt.sign({_id : this._id}, "mynameisprateekkumartiwari")
        console.log("the token part is her" + token);
        res.cookie("authtoken", token)
        console.log("cookie done while sign up");
        const finaldata = await firstuser.save();
        // console.log(finaldata);
        res.status(200).send("done")
    } catch (error) {
        console.log(error);
        res.status(400).send("error")
    }
})
app.post("/login", async(req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        console.log(name);
        console.log(password);
        const dataget = await collection.findOne({uname : name})
        const passget = dataget.pswd
        const ismatch = bcrypt.compare(password, passget)
        if (ismatch) {
            // Send JWT
            console.log("login successfull");
            // const tokenlogin = dataget.genratetoken();
            const tokenlogin = jwt.sign({_id : dataget._id}, "mynameisprateekkumartiwari")
            console.log("token here for login : " + tokenlogin);
            res.cookie("logincookie", tokenlogin)
            console.log("cookie done");
            res.status(201).send({"msg" : "login cookie is done"})
        }
        else{
            console.log("password mismatched");
            res.status(400)
        }
    }
    catch (error) {
        console.log(error);
    }
})
app.post("/blogpost", async (req, res) =>{
    try {
        // const token = req.cookies.anshul;
        // console.log(token);
        console.log(req.body.descblog);
        const newblog = new blogdoc({
            title : req.body.title,
            category : req.body.category,
            yourname : req.body.writerofblog,
            blogdesc : req.body.descblog,
            date : req.body.pubdate   
       }) 
       await newblog.save()
       res.status(200);
       console.log("data saved done");
    } catch (error) {
        console.log(error);
        res.status(400);
    }
})
app.post("/blogetting", async (req, res) => {
    try {
        console.log(req.body.reqbody);
        const dt = blogcollection.find({title : req.body})
        console.log(dt);
        // res.send(dt)
        // res.send("hello we got your data");
    } catch (error) {
        console.log(error);
    }
})
app.get("/fetchingblogdata", async(req, res) => {
    try {
        const pt = await blogcollection.find();
        res.send(pt)
        // console.log(pt);
    } catch (error) {
        console.log(error);
        res.status(400)
    }
})
app.get("/papaji", auth,(req, res) => {
    console.log("done");
})
app.listen(8000, ()=>{
    console.log("server running at port 8000");
})