import React from 'react'
import axios from "axios"
import "./blogbanner.css"
import Homepage from "./home"
import Loginpg from "./Login"
import { useState, useEffect } from 'react'
import Blogbanner from "./blogbanner"
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blogcard from './blogcard'
axios.defaults.withCredentials = true;
export default function Blogs() {
    const[authenticatedhai, setauth] = useState("false");
    const authenticated = async() =>{
            const res = await axios.get("http://localhost:8000/papaji");
            console.log(res.data);
            if (res.data.msg == "user is authenticated"){
                setauth("true");
            }
    }
    useEffect(() => {
        authenticated()
    }, [])
    return (
        <div>
            {
                (authenticatedhai == "true") ?         
                    <div>
                        <Homepage/>
                        <Blogbanner/>
                        <h2 className = "banner">WELCOME TO OUR BLOG SECTION</h2>
                        <Blogcard />
                        <Link to = "/blogwriting"><a href="#">Write a blog</a></Link>
                    </div> : <Loginpg/>
            }
        </div>
    )
}
