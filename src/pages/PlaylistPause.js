import React from "react";
import { useState } from "react";
import { Container, Row, Col, Modal, Form, Image } from "react-bootstrap";

import { Playlist } from "./Playlist";
import ButtonNavigate from "../components/ButtonNavigate";

import orderReminder from "../assets/image/reminder/pau-pau-order-reminder.png";

export function PlaylistPause() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <div>
      <Playlist />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hold on a second</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ width: "380px" }}>
            <Form>
              <Image className="img-large" src={orderReminder} alt="Icons" />
              <h2 className="f-24 fw-bold mb-lg text-center">
                How many week(s) would you like to pause your playlist?
              </h2>
              <Row>
                <Col>
                  <Form.Select className="my-2 fc-pink dropdown-long">
                    <option>Week(s)</option>
                    <option value="1">1 week</option>
                    <option value="2">2 weeks</option>
                    <option value="3">3 weeks</option>
                    <option value="4">4 weeks</option>
                  </Form.Select>
                </Col>
              </Row>
              <ButtonNavigate
                class="btn btn-main my-2"
                type="submit"
                path="/playlist"
                text="Confirm"
              />
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
