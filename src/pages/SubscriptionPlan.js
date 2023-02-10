import {
  Container,
  Form,
  Row,
  Col,  
  Image,
} from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import subscriptionPlan from "../assets/image/login/pau-pau-order-processing.png";

export function SubscriptionPlan() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/playlist"
          imgSrc={backArrow}
          imgAlt="Back Arrow"
        />
        <br />
        <Image className="img-small" src={subscriptionPlan} alt="Icons" />
        <h2 className="f-24 fw-bold mb-lg">
          Let's configure your subscription plan
        </h2>
        <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
            <p>5 meal deliveries/pax</p>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <Form.Select className="dropdown-short">
              <option>Pax</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
            <p>Preferred day of delivery</p>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <Form.Select className="dropdown-short">
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
            <p>Preferred time of delivery</p>
          </Col>
          <Col xs={5} sm={5} md={5} lg={5} xl={5} xxl={5}>
            <Form.Select className="dropdown-short">
              <option>Time</option>
              <option value="1">12.00 pm - 12.15 pm</option>
              <option value="2">12.15 pm - 12.30 pm</option>
              <option value="3">12.30 pm - 12.45 pm</option>
              <option value="4">12.45 pm - 13.00 pm</option>
            </Form.Select>
          </Col>
        </Row>
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/summary"
          text="Review subscription plan"
        />
      </Form>
    </Container>
  );
}
