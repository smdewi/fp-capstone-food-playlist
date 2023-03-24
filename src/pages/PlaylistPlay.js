import React from "react";
import { useState } from "react";
import { Container, Modal, Form, Image } from "react-bootstrap";

import { Playlist } from "./Playlist";
import ButtonNavigate from "../components/ButtonNavigate";

import orderReminder from "../assets/image/reminder/pau-pau-order-reminder.png";

export function PlaylistPlay() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <div>
      <Playlist />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Great to see you back</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ width: "380px" }}>
            <Form>
              <Image className="img-large" src={orderReminder} alt="Icons" />
              <h2 className="f-24 mb-lg text-center">
                You have previously selected to pause your playlist.
              </h2>
              <h2 className="f-24 fw-bold mb-lg text-center">
                Would you like to continue having food deliveries in your active playlist?
              </h2>
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
