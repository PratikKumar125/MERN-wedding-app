import React, {useState} from 'react'
import "../App.css"
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios"
import bgimg from "../mainbg.jpg"
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import userlogo from "../profile-icon-png.png"
export default function Navbar(){
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
    )
}
