import React, { useState, useEffect } from "react";
import { Button, Image, Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const ShowRestraurantInfo = () => {
    const [data, setData] = useState([]);
    const fetchDetails = (e) => {
        e.preventDefault();
        axios.get("https://run.mocky.io/v3/4d15362b-9156-4e1c-b4b1-69f300ddc387")
            .then(res => console.log(1))
            .catch(console.error());
        useEffect(
            setData(res)
        ,[]);
        console.log(data.data.name);
    }
    return (
        <>
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image src="" rounded />
                            </Col>
                            
                        </Row>
                    </Container>
                    <Button onClick={fetchDetails}>OK</Button>
                </div>
            </div>
        </>
    )
}
export default ShowRestraurantInfo