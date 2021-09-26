import React, {useState} from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios"
import bgimg from "../mainbg.jpg"
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import userlogo from "../profile-icon-png.png"
import "../App.css"

export default function Home() {
    const[searchdata, setsearchdata] = useState("")
    
    const dropdown = (event) => {
        console.log(event.target.value)
    }
    const searching = (e) => {
        setsearchdata(e.target.value)
    }
    const iconclicked = () => {
        console.log("icon clicked........");
        setsearchdata("");
        console.log(searchdata);

    }

    return (
        <div className = "homeconatiner">
            <img src={bgimg} alt="" srcset="" className = "homeimg" />
            <div className="baring">
                    <div className="logo">
                        <h2>weddinnz bit</h2>
                    </div>
                    <div className="items">
                            <Link style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "itemsa">Contact Us</a></Link>
                            <Link  to = "/blogs" style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "itemsa" href="#">Blogs</a></Link>
                            <Link style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "itemsa" href="#">Venues</a></Link>
                            <Link style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "itemsa" href="#">Policies</a></Link>
                            <Link style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "itemsa" href="#">FAQ</a></Link>
                            {/* <a href="#">Contact us</a>
                            <a href="#">Blogs</a>
                            <a href="#">Venues</a>
                            <a href="#">Policies</a>
                            <a href="#">FAQ</a> */}
                            {/* <div className={classes.root}><Avatar className={classes.pink}>OP</Avatar> */}
                    </div>
                    <div className="searchbar">
                        <div className="bar">
                            <input type="text" name="" id="" placeholder = "search venue by name" onChange = {searching} /><center><SearchIcon onClick = {iconclicked} className = "searchicostyle" style = {{cursor : "pointer" ,color : "black", position : "absolute", top : "25%", left : "85%"}}/></center> 
                        </div>
                    </div>
            </div>

            <div className="imagecontent">
                <h2 className = "ha2"> Plan Your Wedding With <br></br><span className = "spancont"> India’s Largest Wedding Co. </span></h2>
                <div className="custom-select">
                    <select onChange = {dropdown}>
                        <option value="">select your city......</option>
                        <option value="1">jhansi</option>
                        <option value="2">ujjain</option>
                        <option value="3">ujjain</option>
                        <option value="4">ujjain</option>
                        <option value="5">ujjain</option>
                        <option value="6">ujjain</option>
                        <option value="7">ujjain</option>
                        <option value="8">ujjain</option>
                        <option value="9">ujjain</option>
                        <option value="10">ujjain</option>
                        <option value="11">ujjain</option>
                        <option value="12">ujjain</option>
                        <option value="13">ujjain</option>
                        <option value="14">ujjain</option>
                        <option value="15">ujjain</option>
                    </select>
                </div>
            </div>
            <div className="login">
                <img className = "loginsys" src= {userlogo} alt="" srcset="" />
                {/* <Link to = "/login"><a href="#">log in</a></Link>
                <Link style = {{display:"flex"}} to = "/signup"><a href="#">register</a></Link> */}
                <Link to = "/login" style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "logas1">Log in</a></Link>
                <Link to = "/signup" style = {{textDecoration : "none", height:"auto", width :"auto"}}><a className = "logas2">Register</a></Link>
            </div>
        </div>

    )
}
