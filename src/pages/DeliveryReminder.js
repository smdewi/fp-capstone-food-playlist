import React from "react";
import { useState } from "react";
import { Container, Modal, Form, Image } from "react-bootstrap";

import VendorCardTiles from "../components/VendorCardTiles";
import SwimLane from "../components/SwimLane";
import ButtonNavigate from "../components/ButtonNavigate";

import orderReminder from "../assets/image/reminder/pau-pau-order-reminder.png";

export function DeliveryReminder() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <div>
      <SwimLane></SwimLane>
      <br />
      <VendorCardTiles></VendorCardTiles>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delivery Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ width: "380px" }}>
            <Form>
              <Image className="img-large" src={orderReminder} alt="Icons" />
              <h2 className="f-24 fw-bold mb-lg text-center">
                You have an upcoming delivery on 20 April 2023 (Thur) at
                12.00pm.
              </h2>
              <ButtonNavigate
                class="btn btn-main my-2"
                type="submit"
                path="/confirmation"
                text="Yes, please deliver it to me"
              />
              <ButtonNavigate
                class="btn btn-main-reversed my-2"
                type="submit"
                path="/playlistpause"
                text="Pause my food playlist"
              />
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
