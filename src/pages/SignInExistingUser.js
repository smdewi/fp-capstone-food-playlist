import {
  Container,
  Form,  
  FloatingLabel,
  Image,
} from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import email from "../assets/image/login/img-email.svg";

export function SignInExistingUser() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/login"
          imgClassSec="back-arrow"
          imgSrcSec={backArrow}
          imgAltSec="Back Arrow"
        />
        <br />
        <Image className="img-small" src={email} alt="Icons" />
        <h2 className="f-24 fw-bold mb-lg">What's your email & password?</h2>
        <Form.Group className="mb-3" controlId="formEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
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
          path="/subscriptionplan"
          text="Continue"
        />
      </Form>
    </Container>
  );
}
