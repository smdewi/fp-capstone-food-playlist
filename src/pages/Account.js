import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
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
import SubmitButton from '../components/SubmitButton';

export function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Axios.post('https://pau-pau-food-playlist-api.onrender.com/user', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    });
    
    alert('Creating new user');
    navigate('/subscriptionplan');
  }

  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <Form onSubmit={handleSubmit}>
        <ButtonNavigate
          class="btn-back"
          path="/signup"
          imgClassSec="back-arrow"
          imgSrcSec={backArrow}
          imgAltSec="Back Arrow"
        />
        <br />
        <Image className="img-small" src={createAccount} alt="Icons" />
        <h2 className="f-24 fw-bold mb-xs">Let's get you started!</h2>
        {/* <h3 className="f-14 fw-light mb-lg">
          First, let's create your foodpanda account with paupau@hungry.com
        </h3> */}
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formFirstName">
              <FloatingLabel
                controlId="firstName"
                label="First name"
                className="mb-3"
              >
                <Form.Control placeholder="First name" required onChange={(e) => {setFirstName(e.target.value)}}/>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formLastName">
              <FloatingLabel
                controlId="lastName"
                label="Last name"
                className="mb-3"
              >
                <Form.Control placeholder="Last name" required onChange={(e) => {setLastName(e.target.value)}}/>
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" required onChange={(e) => {setEmail(e.target.value)}}/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <FloatingLabel
            controlId="password"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" required onChange={(e) => {setPassword(e.target.value)}} />
          </FloatingLabel>
        </Form.Group>

        <SubmitButton
          class="btn btn-main my-2"
          type="submit"
          text="Create New User"
        />
      </Form>
    </Container>
  );
}
