const cookiepa = require("cookie-parser");
const jwt = require("jsonwebtoken");
const user = require("../db/schemas")

const auth = async(req, res, next) => {
    try {
        const token = req.cookies.logincookie;
        // console.log(token);
        const verifyuser = jwt.verify(token, "mynameisprateekkumartiwari")
        console.log(verifyuser);
        res.status(200).send({"msg" : "user is authenticated"})
        next() 
    } catch (error) {
        console.log("error occured");
        res.status(400).send({"msg" : "user not authenticated"})
    }
}
module.exports = auth;