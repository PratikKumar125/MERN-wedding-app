import React from 'react'
import axios from "axios"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import Blogcard from "./blogcard"
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function Blogs() {
    const[intitalapidata, setapidata] = useState([])
    const apigetting = async() => {
        const datagott = await axios.get("http://api.mediastack.com/v1/news?access_key=80556226bb3bcc525d3e534d5a1fd7e8")
        console.log(datagott.data.data);
        const finaldata = datagott.data.data
        setapidata(finaldata)
    }
    console.log(intitalapidata);
    useEffect(() => {
        apigetting()
    }, [])
    return (
        <div>
            <Blogcard name = {intitalapidata}/>
            <h2>WELCOME TO OUR BLOG SECTION</h2>
            <Link to = "/blogwriting"><a href="#">Write a blog</a></Link>
            {/* <button type="submit" onClick = {apigetting}>get</button> */}
        </div>
    )
}
