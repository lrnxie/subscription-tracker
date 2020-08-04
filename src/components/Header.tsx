import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import NewSubscription from "./NewSubscription";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar className="d-flex" variant="dark" bg="info">
      <Navbar.Brand className="flex-grow-1">Subscription Tracker</Navbar.Brand>
      <OverlayTrigger
        key="left"
        placement="left"
        overlay={<Tooltip id="new-subscription">Add subscription</Tooltip>}
      >
        <Button variant="outline-light" onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </OverlayTrigger>
      <NewSubscription show={show} handleClose={() => setShow(false)} />
    </Navbar>
  );
};

export default Header;
