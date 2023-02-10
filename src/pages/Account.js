import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Image,
} from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import createAccount from "../assets/image/login/img-create-new-account.svg";

export function Account() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/signup"
          imgSrc={backArrow}
          imgAlt="Back Arrow"
        />
        <br />
        <Image className="img-small" src={createAccount} alt="Icons" />
        <h2 className="f-24 fw-bold mb-xs">Let's get you started!</h2>
        <h3 className="f-14 fw-light mb-lg">
          First, let's create your foodpanda account with paupau@hungry.com
        </h3>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <FloatingLabel
                controlId="floatingInput"
                label="First name"
                className="mb-3"
              >
                <Form.Control placeholder="First name" />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <FloatingLabel
                controlId="floatingInput"
                label="Last name"
                className="mb-3"
              >
                <Form.Control placeholder="Last name" />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formPassword">
          <FloatingLabel
            controlId="floatingInput"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/playlist"
          text="Create an account"
        />
      </Form>
    </Container>
  );
}
