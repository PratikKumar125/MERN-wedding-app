import React, {useState} from 'react'
import "./LL.css"
import userimg from "../822711_user_512x512.png"
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import userpng from "../user.png"
import pswdpng from "../password.png"
import "aos/dist/aos.css";
import axios from "axios"
import AOS from "aos";
axios.defaults.withCredentials = true;


export default function Login() {
    const history = useHistory();
    AOS.init()
    const[Logdata, setlogdata] = useState({fname : "", psw : ""})
    const logindata = (e) => {
        const Name = e.target.name;
        const Val = e.target.value;
        setlogdata({...Logdata, [Name] : Val})
    }
    const submitlog = async() => {
        console.log(Logdata);
        console.log("sucess....");
        setlogdata({fname:"", psw:""})
        const res = await axios.post("http://localhost:8000/login", {name : Logdata.fname, password : Logdata.psw})
        console.log("data of login user is posted successfully");
        history.push("/blogs")
    }
    return (
        <div className="logbody" >
            <div className = "loginbox" data-aos="flip-left" data-aos-delay="50" data-aos-easing="ease-in-out-cubic">
                <img className = "mainimg" src={userimg} alt="" srcset="" />
                <div className="username">
                    <img className = "imageico" src={userpng} alt="" srcset="" />
                    <input name = "fname" value = {Logdata.fname} className = "loginput" type="text" placeholder="Username" onChange = {logindata}/>
                </div>
                <div className="password">
                    <img className = "imageico2" src={pswdpng} alt="" srcset="" />
                    <input name = "psw" value = {Logdata.psw} className = "loginput2" type="password" placeholder = "Password" onChange = {logindata}/>
                </div>
                <Link to="/loginsuccess"><a onClick = {submitlog} className = "anchor">Log IN</a></Link>
            </div>
        </div>
    )
}
