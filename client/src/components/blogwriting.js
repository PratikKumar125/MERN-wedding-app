import React from 'react'
import axios from 'axios'
import { useState } from 'react'
export default function Blogwriting() {
    const[signupdata, setsignupdata] = useState({title:"", category:"", writerofblog:"", contentofblog :"", mdate :"22 Oct"})
    const changing = (e) => {
        let Name = e.target.name;
        let Value = e.target.value;
        setsignupdata({...signupdata, [Name]:Value})
    }
    const submit = async()  => {
        console.log(signupdata.contentofblog);
        await axios.post("http://localhost:8000/blogpost", {title : signupdata.title, category : signupdata.category, writer : signupdata.writerofblog, descblog : signupdata.contentofblog, pubdate : signupdata.mdate})
        console.log("blog data sent succesfully");
        setsignupdata({title:"", category:"", writerofblog:"", blogbod :"", currdate :""})
    }
    return (
        <div>
            <h1>Hey! write your own blog</h1>
            <label htmlFor="" className="labels">Title</label>
            <input onChange = {changing} name = "title" value = {signupdata.title} type="text" className="inputs" />
            <label htmlFor="" className="labels">Category</label>
            <input onChange = {changing} name = "category" value = {signupdata.category} className="inputs" />
            <label htmlFor="" className="labels">Your Name?</label>
            <input onChange = {changing} name = "writerofblog" value = {signupdata.writerofblog} type="text" className="inputs" />
            <label htmlFor="" className="labels">Body</label>
            <input onChange = {changing} name = "contentofblog" value = {signupdata.contentofblog} type="text" className = "inputs"/>
            <label htmlFor="" className="labels">Date</label>
            <input onChange = {changing} name = "publishedAt" value = {signupdata.mdate} type="text" className = "inputs"/>
            <button type="submit" onClick = {submit}>submit</button>
        </div>
    )
}
