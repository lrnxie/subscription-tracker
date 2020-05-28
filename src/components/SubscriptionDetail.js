import React, { useContext, useState } from "react";
import moment from "moment";
import { SubscriptionContext } from "../contexts/SubscriptionContext";
import EditSubscription from "./EditSubscription";

import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SubscriptionDetail = ({ subscription }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { dispatch } = useContext(SubscriptionContext);

  const formatCycle = (cycle) => {
    switch (cycle) {
      case "weekly":
        return "wk";
      case "monthly":
        return "mo";
      case "yearly":
        return "yr";
      default:
        return "";
    }
  };

  const nextBill = (cycle, date) => {
    let nextDate;

    if (cycle === "yearly") {
      const diff = moment().diff(date, "years", true);
      nextDate =
        diff > 0
          ? moment(date).add(Math.floor(diff) + 1, "year")
          : moment(date);
    } else if (cycle === "monthly") {
      const diff = moment().diff(date, "months", true);
      nextDate =
        diff > 0
          ? moment(date).add(Math.floor(diff) + 1, "month")
          : moment(date);
    } else {
      const diff = moment().diff(date, "weeks", true);
      nextDate =
        diff > 0
          ? moment(date).add(Math.floor(diff) + 1, "week")
          : moment(date);
    }

    return nextDate.format("MMM DD, YYYY");
  };

  return (
    <tr>
      <td>{subscription.name}</td>
      <td>
        ${subscription.price} / {formatCycle(subscription.cycle)}
      </td>
      <td>{nextBill(subscription.cycle, subscription.date)}</td>

      <td>
        <Button variant="outline-info" className="mr-1" onClick={handleShow}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <EditSubscription
          show={show}
          handleClose={handleClose}
          subscription={subscription}
        />

        <Button
          variant="outline-info"
          onClick={() =>
            dispatch({ type: "REMOVE_SUBSCRIPTION", id: subscription.id })
          }
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </tr>
  );
};

export default SubscriptionDetail;
