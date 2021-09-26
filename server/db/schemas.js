require("./conn")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const schema = mongoose.Schema({
    uname : String,
    pswd : String,
    gmail : String,
    contact : Number,
    tokens : [{
        token : {
        type : String,
        required : true
    }}]
})

schema.pre("save", async function(next){
    if(this.isModified("pswd")){
        console.log("curent password is" + this.pswd);
        this.pswd = await bcrypt.hash(this.pswd, 10);
        console.log("curent password is" + this.pswd);
        next()
    }
})

schema.methods.genratetoken = async function(){
    try {
        const tokengenrated = jwt.sign({_id : this._id}, "mynameisprateekkumartiwari")
        console.log(tokengenrated);
        this.tokens = this.tokens.concat({token : tokengenrated});
        await this.save()
        return tokengenrated
    } catch (error) {
        console.log(error);
    }
}
const user = mongoose.model("signupdata", schema)

module.exports = user;