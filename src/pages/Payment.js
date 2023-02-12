import { Container, Form, Image } from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import ButtonLogin from "../components/ButtonLogin";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import wallet from "../assets/image/login/img-wallet.svg";
import forwardArrow from "../assets/icons/arrows/ic-arrow-forward.svg";
import masterCard from "../assets/icons/payment/ic-payments-mastercard-xs.svg";
import payLah from "../assets/icons/payment/ic-payments-paylah.svg";

export function Payment() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/summary"
          imgClassSec="back-arrow"
          imgSrcSec={backArrow}
          imgAltSec="Back Arrow"
        />
        <br />
        <Image className="img-small mx-aut0" src={wallet} alt="Icons" />
        <h2 className="f-24 fw-bold mb-lg">Select payment method</h2>
        <ButtonNavigate
          class="btn btn-main-reversed my-2"
          path="/carddetails"
          text="Credit or debit card"
          imgClass="mx-4"
          imgSrc={masterCard}
          imgAlt="Mastercard"
          imgClassSec="mx-4"
          imgSrcSec={forwardArrow}
          imgAltSec="Forward Arrow"
        />
        <br />
        <ButtonLogin
          class="btn btn-main-reversed my-2"          
          text="PayLah!"
          imgClass="mx-4"
          imgSrc={payLah}
          imgAlt="PayLah"
          imgClassSec="mx-4"
          imgSrcSec={forwardArrow}
          imgAltSec="Forward Arrow"
        />
      </Form>
    </Container>
  );
}
