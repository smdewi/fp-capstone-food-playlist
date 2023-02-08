import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const images = [
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200",
  "https://via.placeholder.com/298X200"
];

function VendorCardTile({ image }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some text to describe the card content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function VendorCardTiles() {
  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col key={index} md={4} lg={3} className="mb-4">
            <VendorCardTile image={image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VendorCardTiles;