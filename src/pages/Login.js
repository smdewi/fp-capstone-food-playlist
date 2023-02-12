import React from "react";
import { Container } from "react-bootstrap";

import "../components/style.css";
import ButtonLogin from "../components/ButtonLogin";
import ButtonNavigate from "../components/ButtonNavigate";

import logoApple from "../assets/icons/social/logo-apple.svg";
import logoFacebook from "../assets/icons/social/logo-facebook.svg";
import logoGoogle from "../assets/icons/social/logo-google.svg";

export function Login() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <h2 className="f-24 fw-bold mb-xs"> Welcome!</h2>
      <h3 className="f-14 fw-light mb-lg">Sign up or log in to continue</h3>

      <ButtonLogin
        class="btn my-2"
        variant="dark"        
        imgSrc={logoApple}
        imgAlt="Apple Logo"
        text="Continue with Apple"
      />
      <ButtonLogin
        class="btn btn-fb my-2"        
        imgSrc={logoFacebook}
        imgAlt="Facebook Logo"
        text="Continue with Facebook"
      />
      <ButtonLogin
        class="btn my-2"
        variant="outline-secondary"        
        imgSrc={logoGoogle}
        imgAlt="Google Logo"
        text="Continue with Google"
      />

      <hr style={{ width: "343px" }} />
      <ButtonNavigate class="btn btn-main my-2" path="/signup" text="Log in" />
      <ButtonNavigate
        class="btn btn-main-reversed my-2"
        path="/signup"
        text="Sign up"
      />
    </Container>
  );
}
