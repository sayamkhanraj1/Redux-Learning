const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// product
const GET_PRODUCT = "getProduct";
const ADD_PRODUCT = "addProduct";

// product action
const initialProductState = {
  product: ["suger", "salt"],
  count: 2,
};

// product action
const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// productReducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.product, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));
