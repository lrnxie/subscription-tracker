import React, { useContext, useState } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditSubscription = ({ show, handleClose, subscription }) => {
  const { dispatch } = useContext(SubscriptionContext);
  const [name, setName] = useState(subscription.name);
  const [price, setPrice] = useState(subscription.price);
  const [cycle, setCycle] = useState(subscription.cycle);
  const [date, setDate] = useState(subscription.date);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const updatedSubscription = {
      id: subscription.id,
      name,
      price,
      cycle,
      date,
    };

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      dispatch({
        type: "EDIT_SUBSCRIPTION",
        subscription: { id: subscription.id, updatedSubscription },
      });
      setValidated(false);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit subscription</Modal.Title>
      </Modal.Header>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Subscription name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Subscription price"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Billing cycle</Form.Label>
            <Form.Control
              as="select"
              value={cycle}
              onChange={(e) => setCycle(e.target.value)}
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>First bill on</Form.Label>
            <Form.Control
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a date
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditSubscription;
