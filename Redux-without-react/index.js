const { createStore } = require("redux");

// definig constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const counterState = {
  count: 0,
};

const initialUserState = {
  users: [{ name: "Najmul Hossain" }],
};

// action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Sayam Khan" },
  };
};

// create reducer for counter
const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      state;
  }
};

// store
// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
