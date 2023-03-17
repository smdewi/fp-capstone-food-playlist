import { useState } from "react";
import { Container, Form, Image } from "react-bootstrap";

import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import subscriptionPlan from "../assets/image/login/pau-pau-order-processing.png";
import cuisines from "../assets/cuisines.json";

export function CusineSelection() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
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
        <Image className="img-small" src={subscriptionPlan} alt="Icons" />
        <h2 className="f-24 fw-bold mb-lg">
          Choose up to 3 cuisines that you enjoy
        </h2>
        <div>
          {cuisines.cuisines.map((option) => (
            <Container
              key={option.id}
              className={`option ${
                selectedOptions.includes(option.title) ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect(option.title)}
            >
              {option.title}
            </Container>
          ))}
        </div>
        <br />
        <ButtonNavigate
          class="btn btn-main my-2"
          type="submit"
          path="/ingredient-exclusion"
          text="Select ingredients to exclude"
        />
      </Form>
    </Container>
  );
}
