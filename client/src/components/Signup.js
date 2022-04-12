import React, {useState} from 'react'
import axios from "axios"
import "./Su.css"
import "aos/dist/aos.css";
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from "aos";
export default function Signup() {
    AOS.init()
    const[signupdata, setsignupdata] = useState({username:"", password:"", mail:"", contact :""})
    const changing = (e) => {
        let Name = e.target.name;
        let Value = e.target.value;
        setsignupdata({...signupdata, [Name]:Value})
    }

    const register = async() => {
        console.log("at signup react");
        await axios.post("http://localhost:8000/signup", {uname: signupdata.username, pswd: signupdata.password, gmail : signupdata.mail, contact : signupdata.contact})
        console.log("saving data is done");
        console.log(signupdata);
        setsignupdata({username:"", password:"", mail:"", contact :""})

    }
    return (
        <div className="main">
            <div className="chodha">
                <h1 data-aos="flip-left" data-aos-delay="50" data-aos-easing="ease-in-out">Already a member?</h1>
                
                <Link to = "/login" style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "chodakaa" data-aos="flip-right" data-aos-delay="50" data-aos-easing="ease-in-out" href="#">log in</a></Link>
            </div>
            <div data-aos="flip-left" data-aos-delay="50" data-aos-easing="ease-in-out" className="left">
                <form action="" method="post">
                    <label htmlFor="" className="labels">Username</label>
                    <input onChange = {changing} name = "username" value = {signupdata.username} type="text" className="inputs" />
                    <label htmlFor="" className="labels">password</label>
                    <input onChange = {changing} name = "password" value = {signupdata.password} type="password" className="inputs" />
                    <label htmlFor="" className="labels">Email</label>
                    <input onChange = {changing} name = "mail" value = {signupdata.mail} type="text" className="inputs" />
                    <label htmlFor="" className="labels">Contact</label>
                    <input onChange = {changing} name = "contact" value = {signupdata.contact} type="text" className="inputs" />
                    <a href="#" onClick = {register}>Sign up</a>
                </form>
            </div>
        </div>
    )
}
