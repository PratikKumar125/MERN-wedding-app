const express = require("express")
const app = express()
const Cors = require("cors")

const user = require("./db/schemas")
const { collection } = require("./db/schemas")

const blogcollection = require("./db/blogschema")
const blogdoc = require("./db/blogschema")

app.use(express.json())
app.use(Cors())
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
        // console.log("the token part is her" + token);

        const coo = res.cookie("prateekdevlopernoobie", token)
        console.log("cookie done");
        // console.log(coo);

        const finaldata = await firstuser.save();
        // console.log(finaldata);
        res.status(200).send("done")
    } catch (error) {
        console.log(error);
        res.status(400).send("error")
    }
})
app.post("/login", async (req, res) => {
    res.cookie("jwtauth", token)
    const name = req.body.name;
    const password = req.body.password;
    if (name === ""){
        res.status(400)
    }
    console.log(name);
    console.log(password);
    try{
        const dataget = await collection.findOne({uname : name})
        const passget = dataget.pswd
        const token = await firstuser.genratetoken();

        if (password === passget){
            
            console.log("login successfull");
            res.status(201)
        }
        else{
            console.log("wrong password");
            res.status(400)
        }
    }
    catch(error){
        console.log(error);
    }
})
app.post("/blogpost", async (req, res) =>{
    try {
        const newblog = new blogdoc({
        title : req.body.title,
        category : req.body.category,
        yourname : req.body.writerofblog,
        content : req.body.contentofblog    
       }) 
       await newblog.save()
       res.status(200);
       console.log("data saved done");
    } catch (error) {
        console.log(error);
        res.status(400);
    }
})
app.listen(8000, ()=>{
    console.log("server running at port 8000");
})