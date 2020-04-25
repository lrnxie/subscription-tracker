import React, { createContext, useReducer, useEffect } from "react";
import { subscriptionReducer } from "../reducers/subscriptionReducer";

export const SubscriptionContext = createContext();

export const SubscriptionContextProvider = (props) => {
  const [subscriptions, dispatch] = useReducer(subscriptionReducer, [], () => {
    const localData = localStorage.getItem("subscriptions");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  return (
    <SubscriptionContext.Provider value={{ subscriptions, dispatch }}>
      {props.children}
    </SubscriptionContext.Provider>
  );
};
