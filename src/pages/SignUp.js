import {
  Container,
  Form,  
  FloatingLabel,
  Image,
} from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import email from "../assets/image/login/img-email.svg";

export function SignUp() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/login"
          imgSrc={backArrow}
          imgAlt="Back Arrow"
        />
        <br />
        <Image className="img-small" src={email} alt="Icons" />
        <h2 className="f-24 fw-bold mb-xs">What's your email?</h2>
        <h3 className="f-14 fw-light mb-lg">
          We'll check if you have an account
        </h3>
        <Form.Group className="mb-3" controlId="formEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/account"
          text="Continue with email"
        />
      </Form>
    </Container>
  );
}
