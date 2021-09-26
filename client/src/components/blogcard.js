import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default function blogcard(props) {
    // console.log(props.prop[0]);
    console.log(props.name);
    return (
        <div>
            {
                props.name.map((curr) => {
                    console.log(curr);
                    return(
                        <>
                        <h2>hy</h2>
                        </>
                    )
                })
            }
        </div>
    )
}
