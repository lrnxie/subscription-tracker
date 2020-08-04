import React, { createContext, useReducer, useEffect } from "react";

import { subscriptionReducer } from "../reducers/subscriptionReducer";

type Props = {
  children: React.ReactNode;
};

type SubscriptionContext = {
  subscriptions: Subscription[];
  dispatch: React.Dispatch<Action>;
};

export const SubscriptionContext = createContext<
  SubscriptionContext | undefined
>(undefined);

export const SubscriptionContextProvider = ({ children }: Props) => {
  const [subscriptions, dispatch] = useReducer(subscriptionReducer, [], () => {
    const localData = localStorage.getItem("subscriptions");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  return (
    <SubscriptionContext.Provider value={{ subscriptions, dispatch }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
