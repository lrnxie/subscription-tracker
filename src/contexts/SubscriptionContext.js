import React, { createContext, useReducer } from "react";
import { subscriptionReducer } from "../reducers/subscriptionReducer";

export const SubscriptionContext = createContext();

export const SubscriptionContextProvider = (props) => {
  const initState = [
    {
      id: 1,
      name: "Netflix",
      price: 13.99,
      cycle: "monthly",
      date: "2016-01-31",
    },
    {
      id: 2,
      name: "Spotify",
      price: 9.99,
      cycle: "weekly",
      date: "2020-04-03",
    },
    {
      id: 3,
      name: "Amazon Prime",
      price: 79,
      cycle: "yearly",
      date: "2020-02-29",
    },
  ];

  const [subscriptions, dispatch] = useReducer(subscriptionReducer, initState);

  return (
    <SubscriptionContext.Provider value={{ subscriptions, dispatch }}>
      {props.children}
    </SubscriptionContext.Provider>
  );
};
