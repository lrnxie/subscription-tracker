import React, { useContext } from "react";
import Table from "react-bootstrap/Table";

import { SubscriptionContext } from "../contexts/SubscriptionContext";
import SubscriptionDetail from "./SubscriptionDetail";
import Stats from "./Stats";

const SubscriptionList: React.FC = () => {
  const { subscriptions } = useContext(SubscriptionContext)!;

  return subscriptions.length > 0 ? (
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Next bill</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {subscriptions.map((subscription) => {
          return (
            <SubscriptionDetail
              subscription={subscription}
              key={subscription.id}
            />
          );
        })}

        <Stats />
      </tbody>
    </Table>
  ) : (
    <h5 className="text-center mt-5 mx-2">
      No subscriptions. Add one now to start tracking!
    </h5>
  );
};

export default SubscriptionList;
