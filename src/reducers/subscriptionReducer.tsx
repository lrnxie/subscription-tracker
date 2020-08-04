export const subscriptionReducer = (state: Subscription[], action: Action) => {
  switch (action.type) {
    case "ADD_SUBSCRIPTION":
      return [
        ...state,
        {
          id: action.subscription.id,
          name: action.subscription.name,
          price: action.subscription.price,
          cycle: action.subscription.cycle,
          date: action.subscription.date,
        },
      ];

    case "REMOVE_SUBSCRIPTION":
      return state.filter((subscription) => subscription.id !== action.id);

    case "EDIT_SUBSCRIPTION":
      return state.map((subscription) =>
        subscription.id === action.subscription.id
          ? action.subscription.updatedSubscription
          : subscription
      );

    default:
      return state;
  }
};
