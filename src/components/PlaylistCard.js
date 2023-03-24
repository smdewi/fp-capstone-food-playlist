import React from "react";
import { Container, Card, Badge } from "react-bootstrap";

import ButtonPlaylist from "./ButtonPlaylist";
import playBtn from "../assets/icons/playlist/play-btn.svg";
import pauseBtn from "../assets/icons/playlist/pause-btn.svg";

export function PlaylistCard({
  image,
  title,
  sn,
  status,
  startDate,
  endDate,
  width,
  height,
  cusine1,
  cusine2,
  cusine3,
  ingredient1,
  ingredient2,
  ingredient3,
}) {
  return (
    <Container className="playlist-container-shadow" style={{ width: "280px" }}>
      <Container className="d-flex flex-row">
        <Container>
          <Card.Img
            className="playlist-card-sm"
            variant="top"
            src={image}
            width={width}
            height={height}
          />
          <ButtonPlaylist
            class="playlist-btn"
            path="/playlistpause"
            imgSrc={pauseBtn}
            imgAlt="Pause Button"
          />
          <ButtonPlaylist
            class="playlist-btn"
            path="/playlistplay"
            imgSrc={playBtn}
            imgAlt="Play Button"
          />
        </Container>
        <Container>
          <Card.Body className="playlist-container-sm flex-column align-items-baseline">
            <Card.Title className="f-11 fw-bold mb-2">
              Playlist: {title}
            </Card.Title>
            <Card.Title className="f-11 fw-bold mb-2">
              Cusines:&nbsp;
              <Badge pill bg="" className="f-8">
                {cusine1}
              </Badge>
              <Badge pill bg="" className="f-8">
                {cusine2}
              </Badge>
              <Badge pill bg="" className="f-8">
                {cusine3}
              </Badge>
            </Card.Title>
            <Card.Title className="f-11 fw-bold mb-2">
              Excluded ingredients:&nbsp;
              <div className="d-flex flex-row">
                <Badge pill bg="secondary" className="f-8">
                  {ingredient1}
                </Badge>
                <Badge pill bg="secondary" className="f-8">
                  {ingredient2}
                </Badge>
                <Badge pill bg="secondary" className="f-8">
                  {ingredient3}
                </Badge>
              </div>
            </Card.Title>
            <hr />
            <Card.Title className="f-8 fc-lightgrey mb-1">
              Start Date: {startDate}
            </Card.Title>
            <Card.Title className="f-8 fc-lightgrey mb-1">
              End Date: {endDate}
            </Card.Title>
            <Card.Text className="f-8 fc-lightgrey mb-1">
              SN: {sn}/3 ({status} playlist)
            </Card.Text>
          </Card.Body>
        </Container>
      </Container>
    </Container>
  );
}
