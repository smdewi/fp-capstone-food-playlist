import { Container, Form, Row, Col, Image, Card } from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import subscriptionPlan from "../assets/image/login/pau-pau-order-processing.png";

export function SubscriptionPlan() {
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
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
            <Card className="my-2 container-border-pink-md">
              <Card.Text className="my-auto mx-auto">
                Preferred day of delivery
              </Card.Text>{" "}
            </Card>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <Form.Select className="my-2 fc-pink dropdown-short">
              <option>Day</option>
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
            <Card className="my-2 container-border-pink-md">
              <Card.Text className="my-auto mx-auto">
                Preferred time of delivery
              </Card.Text>{" "}
            </Card>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <Form.Select className="my-2 fc-pink dropdown-short">
              <option>Time</option>
              <option value="1">12.00 pm - 12.15 pm</option>
              <option value="2">12.15 pm - 12.30 pm</option>
              <option value="3">12.30 pm - 12.45 pm</option>
              <option value="4">12.45 pm - 13.00 pm</option>
            </Form.Select>
          </Col>
        </Row>
        <br />
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/cuisine-selection"
          text="Select cusines"
        />
      </Form>
    </Container>
  );
}
