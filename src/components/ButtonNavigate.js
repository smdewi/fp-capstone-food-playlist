import React from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ButtonNavigate(props) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(props.path);
  };

  return (
    <Button className={props.class} type={props.submit} onClick={handleClick}>
      <div class="row">
          <div class="col-2 p-1">
          <Image
            className={props.imgClass}
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </div>
        <div class="col-8 p-1">{props.text}</div>
        <div class="col-2 p-1">
          <Image
            className={props.imgClassSec}
            src={props.imgSrcSec}
            alt={props.imgAltSec}
          />
        </div>
      </div>
    </Button>
  );
}

export default ButtonNavigate;
