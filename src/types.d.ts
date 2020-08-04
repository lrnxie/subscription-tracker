type Subscription = {
  id: string;
  name: string;
  price: number;
  cycle: "weekly" | "monthly" | "yearly";
  date: string;
};

type Action =
  | { type: "ADD_SUBSCRIPTION"; subscription: Subscription }
  | { type: "REMOVE_SUBSCRIPTION"; id: string }
  | {
      type: "EDIT_SUBSCRIPTION";
      subscription: { id: string; updatedSubscription: Subscription };
    };
