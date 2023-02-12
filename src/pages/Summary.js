import { Container, Form, Image, Card } from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import cartSummary from "../assets/image/login/cart-summary.svg";

export function Summary() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form>
        <ButtonNavigate
          class="btn-back"
          path="/subscriptionplan"
          imgClassSec="back-arrow"
          imgSrcSec={backArrow}
          imgAltSec="Back Arrow"
        />
        <br />
        <Image className="img-small" src={cartSummary} alt="Icons" />
        <h2 className="f-24 fw-bold mb-lg">Summary</h2>
        <Card className="my-3 container-border-pink-lg">
          <Card.Text className="my-auto mx-auto">
            Cusines: <strong>Chinese, Malay, Indian</strong>
          </Card.Text>
        </Card>
        
        <Card className="my-3 container-border-pink-lg">
          <Card.Text className="my-auto mx-auto">
            5 meal deliveries for 1 pax: <strong>$60</strong>
          </Card.Text>
        </Card>
        <Card className="my-3 container-border-pink-lg">
          <Card.Text className="my-auto mx-auto">
            Preferred day of delivery: <strong>Thursday</strong>
          </Card.Text>
          <Card.Text className="f-14 text-secondary my-auto mx-auto">
            Starting from 23 Apr 2023
          </Card.Text>
        </Card>
        <Card className="my-3 container-border-pink-lg">
          <Card.Text className="my-auto mx-auto">
            Preferred time of delivery: <strong>12:00 pm</strong>
          </Card.Text>
        </Card>
        <br />
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/payment"
          text="Subscribe now"
        />
      </Form>
    </Container>
  );
}
