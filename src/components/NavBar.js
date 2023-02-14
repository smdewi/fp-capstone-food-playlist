import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Container,
  Form,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonNavigate from "./ButtonNavigate";
import logo from "../assets/image/logo/fp-logo-transparent.svg";
import forwardArrowTail from "../assets/icons/arrows/ic-arrow-tail-forward.svg";
import location from "../assets/icons/general/ic-location-generic.svg";
import favourite from "../assets/icons/general/ic-heart-white.svg";
import cart from "../assets/icons/general/ic-cart-white.svg";
import search from "../assets/icons/general/ic-search.svg";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        {["sm"].map((expand) => (
          <Navbar
            sticky="top"
            key={expand}
            expand={expand}
            className="navbar-pink mb-3"
          >
            <Container fluid>
              <Navbar.Brand>
                <Link to="/">
                  <Image src={logo} alt="foodpanda logo" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton className="navbar-pink">
                  <Offcanvas.Title
                    className="fc-white"
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    Welcome
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="navbar-pink">
                  <Nav className="justify-content-between flex-grow-1 pe-3">
                    <NavDropdown
                      className="mt-3 pe-3"
                      title="Delivering to:"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      autoClose="outside"
                    >
                      <NavDropdown.Item>
                        <Form className="d-flex">
                          <Image
                            className="mx-2"
                            src={location}
                            alt="Location"
                          />
                          <Form.Control
                            type="search"
                            placeholder="Enter your street or postal code"
                            className="searchbar my-auto me-2 f-14"
                            aria-label="Search location"
                          />
                          <ButtonNavigate
                            class="btn-main-reversed btn-sm my-2"
                            path="/"
                            imgClass="mx-3"
                            imgSrc={forwardArrowTail}
                            imgAlt="Forward Arrow Tail"
                          />
                        </Form>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      className="mt-3 pe-3"
                      title="When:"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      autoClose="outside"
                    >
                      <NavDropdown.Item style={{ width: "100%" }}>
                        <Form.Select
                          className="f-14"
                          aria-label="Default select example"
                          autoClose="inside"
                        >
                          <option>Today</option>
                          <option value="1">7, Tue</option>
                          <option value="2">8, Wed</option>
                          <option value="3">9, Thu</option>
                        </Form.Select>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item style={{ width: "100%" }}>
                        <Form.Select
                          className="f-14"
                          aria-label="Default select example"
                          autoClose="inside"
                        >
                          <option>ASAP</option>
                          <option value="1">12.00 pm - 12.15 pm</option>
                          <option value="2">12.15 pm - 12.30 pm</option>
                          <option value="3">12.30 pm - 12.45 pm</option>
                          <option value="4">12.45 pm - 1.00 pm</option>
                        </Form.Select>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      className="mt-3 pe-3"
                      title="Login:"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/">
                          pandaPay
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/">
                          Become a pandaPro
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/">
                          Orders & reordering
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/playlist">
                          Playlist
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/">
                          Profile
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/">
                          Vouchers
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="./">
                        <Link className="fc-darkgrey" to="/">
                          Help center
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/login">
                          Login
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="fc-darkgrey" to="/signup">
                          Sign up
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <br />
                    <Link to="/">
                      <Image className="pe-3" src={favourite} alt="Favourite" />
                    </Link>
                    <br />
                    <Link to="/">
                      <Image className="pe-3" src={cart} alt="Cart" />
                    </Link>
                    <br />
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search for restaurants, cuisines and dishes"
                        className="searchbar my-2 me-2 f-14"
                        aria-label="Search"
                      />
                      <ButtonNavigate
                        class="btn-main-reversed btn-sm my-2"
                        path="/"
                        imgClass="mx-3"
                        imgSrc={search}
                        imgAlt="Search"
                      />
                    </Form>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </React.Fragment>
    );
  }
}
