import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel  
} from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";

export function CardDetails() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/payment"
          imgClassSec="back-arrow"
          imgSrcSec={backArrow}
          imgAltSec="Back Arrow"
        />
        <br />        
        <h2 className="f-24 fw-bold mb-xs my-2">Add a credit or debit card</h2>
        <br/>
        <Form.Group className="mb-3" controlId="formCardNo">
          <FloatingLabel
            controlId="floatingInput"
            label="Credit card number"
            className="mb-3"
          >
            <Form.Control placeholder="Credit card number" />
          </FloatingLabel>
        </Form.Group>  
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formExpiryDate">
              <FloatingLabel
                controlId="floatingInput"
                label="MM/YY"
                className="mb-3"
              >
                <Form.Control placeholder="Expiry Date" />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formCVC">
              <FloatingLabel
                controlId="floatingInput"
                label="CVC"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="CVC" />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formName">
          <FloatingLabel
            controlId="floatingInput"
            label="Cardholder's name"
            className="mb-3"
          >
            <Form.Control placeholder="Cardholder's name" />
          </FloatingLabel>
        </Form.Group>        
          <Form.Check 
          className="f-14 text-secondary"
            type="checkbox"
            id="default-checkbox"
            label="Save card for future transactions"
          />
          <br/>          
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/confirmation"
          text="Confirm to pay"
        />
      </Form>
    </Container>
  );
}
