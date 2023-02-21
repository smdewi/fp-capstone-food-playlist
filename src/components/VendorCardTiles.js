import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VendorCardTile from "./VendorCardTile";
import restaurants from "../assets/restaurants.json";

function VendorCardTiles() {
  return (
    <Container fluid>
      <h5 className="d-flex fw-bold">All restaurants</h5>
      <Row>
        {restaurants.restaurants.map((restaurants) => (
          <Col key={restaurants.id} xs={12} md={6} lg={3} className="mb-0">
            <VendorCardTile
              className={"vendor-card-lg"}
              image={restaurants.image}
              text={restaurants.name}
              title2={restaurants.cuisine}
              width={"150px"}
              height={"225px"}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VendorCardTiles;