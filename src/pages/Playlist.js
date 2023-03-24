import React from "react";
import { Container, Col, Image } from "react-bootstrap";

import { PlaylistCard } from "../components/PlaylistCard";
import ButtonNavigate from "../components/ButtonNavigate";
import backArrow from "../assets/icons/arrows/ic-arrow-tail-back.svg";
import paupauPlaylist from "../assets/image/playlist/pau-pau-playlist.png";
import playlist from "../assets/playlist.json";

export function Playlist() {
  return (
    <Container className="container-shadow" style={{ width: "380px" }}>
      <ButtonNavigate
        class="btn-back"
        path="/confirmation"
        imgClassSec="back-arrow"
        imgSrcSec={backArrow}
        imgAltSec="Back Arrow"
      />
      <br />
      <Image className="img-small" src={paupauPlaylist} alt="Icons" />
      <h2 className="f-24 fw-bold mb-lg">Pau Pau's Playlists</h2>
      {playlist.playlist.map((playlist) => (
        <Col key={playlist.id} className="mb-4">
          <PlaylistCard
            image={playlist.image}
            title={playlist.playlistTitle}
            sn={playlist.id}
            status={playlist.status}
            startDate={playlist.startDate}
            endDate={playlist.endDate}
            cusine1={playlist.cusine1}
            cusine2={playlist.cusine2}
            cusine3={playlist.cusine3}
            ingredient1={playlist.ingredient1}
            ingredient2={playlist.ingredient2}
            ingredient3={playlist.ingredient3}
          />
        </Col>
      ))}
      <ButtonNavigate
        class="btn btn-main my-2"
        type="submit"
        path="/deliveryreminder"
        text="Home"
      />
    </Container>
  );
}
