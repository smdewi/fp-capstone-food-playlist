import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        {["sm"].map((expand) => (
          <Navbar
            sticky="top"
            key={expand}
            bg="light"
            expand={expand}
            className="mb-3"
          >
            <Container fluid>
              <Navbar.Brand href="./">foodpanda</Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-between flex-grow-1 pe-3">
                    <NavDropdown
                      className="delivery-where"
                      title="Delivering to:"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#locationAPI">
                        <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Enter your street or postal code"
                            className="me-2"
                            aria-label="Search"
                            style={{ width: "300px" }}
                          />
                          <Button variant="outline-success">Arrow image</Button>
                        </Form>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      className="delivery-when"
                      title="When:"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      autoClose="outside"
                    >
                      <NavDropdown.Item
                        href="#dateAPI"
                        style={{ width: "100%" }}
                      >
                        <Form.Select
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
                      <NavDropdown.Item
                        href="#timingAPI"
                        style={{ width: "100%" }}
                      >
                        <Form.Select
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
                      className="account-details"
                      title="Login:"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="./">
                        pandaPay
                      </NavDropdown.Item>
                      <NavDropdown.Item href="./">
                        Become a pandaPro
                      </NavDropdown.Item>
                      <NavDropdown.Item href="./">
                        Orders & reordering
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/playlist">
                        Playlist
                        </Link>
                        
                      </NavDropdown.Item>
                      <NavDropdown.Item href="./">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item href="./">
                        Vouchers
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="./">
                        Help center
                      </NavDropdown.Item>
                      <NavDropdown.Item href="./login">
                        Login
                      </NavDropdown.Item>
                      <NavDropdown.Item href="./signup">
                        Sign up
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="./">Favourite</Nav.Link>
                    <Nav.Link href="./">Cart</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
            <Container>
            <Form className="d-flex" style={{ width: "100%" }}>
              <Form.Control
                type="search"
                placeholder="Search for restaurants, cuisines and dishes"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            </Container>
          </Navbar>
        ))}
      </React.Fragment>
    );
  }
}
