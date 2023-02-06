import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
  // this containes all reducer
});

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
