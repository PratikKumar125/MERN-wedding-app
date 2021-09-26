require("./conn")
const mongoose = require("mongoose")

const blogschema = mongoose.Schema({
    title : String,
    category : String,
    yourname : String,
    content : String
})

const blogdoc = mongoose.model("blogdata", blogschema)

module.exports = blogdoc;