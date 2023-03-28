import React from "react";
import { Button, Image } from "react-bootstrap";


function SubmitButton(props) {
  

  return (
    <Button className={props.class} type={props.submit}>
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

export default SubmitButton;
