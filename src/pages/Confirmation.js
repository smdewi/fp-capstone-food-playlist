import { Container, Image } from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import orderConfirm from "../assets/image/login/pau-pau-order-confirmed.png";

export function Confirmation() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Image className="img-large" src={orderConfirm} alt="Icons" />
      <h2 className="f-24 fw-bold mb-lg text-center">All set!</h2>
      <h3 className="f-14 fw-light mb-lg text-center">
        You'll be signed in to your account momentarily. If nothing happens,
        click continue.
      </h3>

      <ButtonNavigate
        class="btn btn-main my-2"
        type="submit"
        path="/"
        text="Continue"
      />
    </Container>
  );
}
