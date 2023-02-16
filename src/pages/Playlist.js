import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";


export function Playlist() {
    return (
        <Container fluid>
            <h1>Playlist Page</h1>
            <Container className="container-shadow" style={{ width: "75%" }}>
                <Row>
                    <Col xs={4}>Placeholder Image</Col>
                    <Col xs={8}>
                        <Card.Title>Rainy Day Playlist</Card.Title>
                        <Card.Body>2 / 5</Card.Body>
                        <br />
                        <Card.Body>starts on 1 Feb 2023</Card.Body>
                        <Card.Body>ends on 1 Mar 2023</Card.Body>
                        <br />
                        <Badge pill bg="info" style={{ marginRight: "1em"}}>Soup</Badge>
                        <Badge pill bg="info" style={{ marginRight: "1em"}}>Western</Badge>
                        <Badge pill bg="info" style={{ marginRight: "1em"}}>Chinese</Badge>
                    </Col>
                </Row>
                
            </Container>
        </Container>
        
    );
}