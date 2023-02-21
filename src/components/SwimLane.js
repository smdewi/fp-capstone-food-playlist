import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VendorCardTile from "./VendorCardTile";
import cuisines from "../assets/cuisines.json";

function SwimLane() {
  return (
    <Container fluid className="scrollable">
      <h5 className="d-flex fw-bold">Cuisines</h5>
      <Row className="no-wrap">
        {cuisines.cuisines.map((cuisines) => (
          <Col key={cuisines.id} className="mb-4 ">
            <VendorCardTile className={"vendor-card-sm"} image={cuisines.image} title={cuisines.title} height={"80px"}/>
          </Col>
        ))}
      </Row>      
    </Container>
  );
}

export default SwimLane;