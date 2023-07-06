import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Test() {
  const renderTooltip = (props) => (
    <Tooltip {...props}>Tooltip content</Tooltip>
  );

  return (
    <div className="App">
      <OverlayTrigger placement="right" overlay={renderTooltip}  >
        <Button>Button with Tooltip</Button>
      </OverlayTrigger>
    </div>
  );
}


  

export default Test
