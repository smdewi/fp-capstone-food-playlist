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
      className={props.class}
      variant={props.variant}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? (
        <div class="mx-auto">Loading…</div>
      ) : (
        <div class="row">
          <div class="col-2 p-1">
            <Image
              className={props.imgClass}
              src={props.imgSrc}
              alt={props.imgAlt}
            />
          </div>
          <div class="col-8 p-1">{isLoading ? "" : `${props.text}`}</div>
          <div class="col-2 p-1">
          <Image
              className={props.imgClassSec}
              src={props.imgSrcSec}
              alt={props.imgAltSec}
            />
          </div>
        </div>
      )}
    </Button>
  );
}

export default ButtonLogin;
