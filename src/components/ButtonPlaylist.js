import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonPlaylist(props) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(props.path);
  };

  return (
    <button class={props.class} type={props.submit} onClick={handleClick}>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </button>
  );
}

export default ButtonPlaylist;
