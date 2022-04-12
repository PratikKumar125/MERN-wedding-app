import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./blog.css"
import weddinimg from "./weddin.jpg"
import { navbar } from "./navbar"
export default function Blogcard(props) {
    const[spinit, updateddata] = useState(3)
    const[dtgotted, finldt] = useState([])
    const apigett = async() => {
        // const datagott = await axios.get("http://api.mediastack.com/v1/news?access_key=80556226bb3bcc525d3e534d5a1fd7e8")
        const wegot = await axios.get("http://localhost:8000/fetchingblogdata");
        const Finalda = wegot.data;
        console.log("working");
        console.log(Finalda);
        console.log("best");
        finldt(Finalda)
    }
    const handleClick = async(items) => {
        console.log(items.curr.title);
        const tobesearched = items.curr.title
        const res = await axios.post("http://localhost:8000/blogetting", {reqbody : tobesearched});
        const got = await res.data;
        console.log(got);
        console.log("done");
        console.log({dtgotted});
    }
    const loadmore = () => {
        updateddata(spinit + 3)
    }
    useEffect(() => {
        apigett()
    }, [])
    return (
        <div>
            <Container>
                <Row className = "columncd">
                    {
                    dtgotted.map((curr) => {
                    return(
                        <Col className = "columncd2" lg={4}>
                            <img className = "blim" src="https://www.bing.com/images/search?view=detailV2&ccid=KpNhvpN4&id=9F3209ED6606BB99BFD54022D1ABF67521114967&thid=OIP.KpNhvpN45bJG3NHzQhBK_wHaFj&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2a9361be9378e5b246dcd1f342104aff%3frik%3dZ0kRIXX2q9EiQA%26riu%3dhttp%253a%252f%252f3rc5gc20wpdg1ns78q2pqq9fj6z.wpengine.netdna-cdn.com%252ffiles%252f2015%252f08%252flord-siva.jpg%26ehk%3dsYPhP84B%252fwBKMIdCev5GHTtsIpzUMLSdMk2kGMDqfM4%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=768&expw=1024&q=lord+shiva&simid=608022083453276106&FORM=IRPRST&ck=D20D4A597A7D88E50BD84F2403A07082&selectedIndex=2&ajaxhist=0&ajaxserp=0" alt="" />
                            <h4 className = "heading">{curr.title.slice(0, 200)}</h4>
                            <p className = "blpara">{curr.blogdesc}</p>
                            <p className = "blhe">{curr.yourname}</p>
                            <br/>
                            <p className = "para2">{curr.date}</p>
                            <p className = "para3">{curr.yourname}</p>
                            <button  type = "submit" className = "btncl" onClick={() => handleClick({ curr })}>read more</button>
                        </Col>
                    )
                    }) 
                    }
                </Row>
                <button onClick = {loadmore}>read more blogs</button>
            </Container>
           
        </div>
    )
}
