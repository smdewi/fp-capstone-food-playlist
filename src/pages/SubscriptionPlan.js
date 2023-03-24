import React, { useState } from "react";
import { Container, Form, Row, Col, Image, Card } from "react-bootstrap";

import DeliveryDate from "../components/DeliveryDate";
import DeliveryTime from "../components/DeliveryTime.js";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import subscriptionPlan from "../assets/image/login/pau-pau-order-processing.png";

export function SubscriptionPlan() {
  const [selectedWeekday, setSelectedWeekday] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedWeekday(date.toLocaleDateString("en-GB", { weekday: "long" }));

    const newEndDate = new Date(date);
    newEndDate.setDate(newEndDate.getDate() + 28);
    setEndDate(newEndDate.toLocaleDateString("en-GB"));
  };
  //need to change the back path directory
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/account"
          imgClassSec="back-arrow"
          imgSrcSec={backArrow}
          imgAltSec="Back Arrow"
        />
        <br />
        <Image className="img-small" src={subscriptionPlan} alt="Icons" />
        <h2 className="f-24 fw-bold mb-lg">
          Let's configure your subscription plan
        </h2>
        <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
            <Card className="my-2 container-border-pink-md">
              <Card.Text className="my-auto mx-auto">
                5 meal deliveries/pax
              </Card.Text>{" "}
            </Card>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <Form.Select className="my-2 fc-pink dropdown-short">
              <option>Pax</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
            <Card className="my-2 container-border-pink-md">
              <Card.Text className="my-auto mx-auto">
                Time of delivery
              </Card.Text>{" "}
            </Card>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <DeliveryTime />
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
            <Card className="my-2 container-border-pink-md">
              <Card.Text className="my-auto mx-auto">
                Start date of delivery
              </Card.Text>{" "}
            </Card>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <DeliveryDate
              className="my-2 ps-2 fc-pink dropdown-short"
              onDateChange={handleDateChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {selectedWeekday && (
              <span className="f-14">
                Based on your selected start date, subsequent weekly deliveries
                will be on <strong>{selectedWeekday}</strong> and ends after <strong>{endDate}</strong>
              </span>
            )}
          </Col>
        </Row>
        <br />
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/cuisineselection"
          text="Select cusines"
        />
      </Form>
    </Container>
  );
}
