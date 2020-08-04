import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { SubscriptionContext } from "../contexts/SubscriptionContext";

type NewSubscriptionProps = {
  show: boolean;
  handleClose: () => void;
};

const NewSubscription: React.FC<NewSubscriptionProps> = ({
  show,
  handleClose,
}) => {
  const { dispatch } = useContext(SubscriptionContext)!;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [cycle, setCycle] = useState<Subscription["cycle"]>("weekly");
  const [date, setDate] = useState("");
  const [validated, setValidated] = useState(false);

  const handleClear = () => {
    setName("");
    setPrice(0);
    setCycle("weekly");
    setDate("");
    setValidated(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      dispatch({
        type: "ADD_SUBSCRIPTION",
        subscription: { id: uuidv4(), name, price, cycle, date },
      });
      setName("");
      setPrice(0);
      setCycle("weekly");
      setDate("");
      setValidated(false);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new subscription</Modal.Title>
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
              onChange={(e) =>
                setCycle(e.target.value as Subscription["cycle"])
              }
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
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="info" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewSubscription;
