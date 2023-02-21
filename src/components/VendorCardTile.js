import React from "react";
import { Card } from "react-bootstrap";


function VendorCardTile({ className, image, title, text, title2, width, height }) {
  return (
    <Card className={className}>
      <Card.Img variant="top" src={image} width={width} height={height} />
      <Card.Body className="d-flex flex-column align-items-baseline">
        <Card.Title className="f-14">{title}</Card.Title>
        <Card.Text className="fw-bold">{text}</Card.Text>
        <Card.Title className="f-14 fc-lightgrey">{title2}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default VendorCardTile;