require("./conn")
const mongoose = require("mongoose")

const blogschema = mongoose.Schema({
    title : String,
    category : String,
    yourname : String,
    blogdesc : String,
    date : Date
})

const blogdoc = mongoose.model("blogdata", blogschema)

module.exports = blogdoc;