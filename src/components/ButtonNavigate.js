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
      <Image src={props.imgSrc} alt={props.imgAlt}/>
      {props.text}
    </Button>
  );
}

export default ButtonNavigate;
