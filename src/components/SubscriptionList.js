import React, { useContext } from "react";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import SubscriptionDetail from "./SubscriptionDetail";
import Stats from "./Stats";

import { ListGroup, ListGroupItem, Container, Row, Col } from "reactstrap";

const SubscriptionList = () => {
  const { subscriptions } = useContext(SubscriptionContext);
  return subscriptions.length ? (
    <div className="subscription-list">
      <ListGroup>
        <ListGroupItem>
          <Container>
            <Row>
              <Col>Name</Col>
              <Col>Price</Col>
              <Col>Next bill</Col>
              <Col>Actions</Col>
            </Row>
          </Container>
        </ListGroupItem>
        {subscriptions.map((subscription) => {
          return (
            <SubscriptionDetail
              subscription={subscription}
              key={subscription.id}
            />
          );
        })}
        <ListGroupItem>
          <Stats />
        </ListGroupItem>
      </ListGroup>
    </div>
  ) : (
    <div className="no-subs">No subscriptions. Add one to start tracking!</div>
  );
};

export default SubscriptionList;
