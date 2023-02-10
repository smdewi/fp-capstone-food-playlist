import React, { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function ButtonLogin(props) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      className= {props.className}
      variant={props.variant}         
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : <Image src={props.imgSrc} alt={props.imgAlt}/>}
      {isLoading ? "" : `\u00a0 ${props.text}`}
    </Button>
  );
}

export default ButtonLogin;

