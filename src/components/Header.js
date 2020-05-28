import React, { useState } from "react";
import NewSubscription from "./NewSubscription";

import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="d-flex" variant="dark" bg="info">
      <Navbar.Brand className="flex-grow-1">Subscription Tracker</Navbar.Brand>
      <OverlayTrigger
        key="left"
        placement="left"
        overlay={<Tooltip>Add subscription</Tooltip>}
      >
        <Button variant="outline-light" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </OverlayTrigger>
      <NewSubscription show={show} handleClose={handleClose} />
    </Navbar>
  );
};
