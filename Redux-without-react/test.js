// state - count : 0
// action - increment, decrement, reset
// reducer
// store
const { createStore } = require("redux");

const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const INCREMENT_BY_VALUE = "incrementActionByValue";
// inittialState
const initialState = {
  count: 0,
};

// create action

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};
const incrementActions = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
}

const counterReducer = (state = initialState, action) => {
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
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
 store.dispatch(incrementActions(55));