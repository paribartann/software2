import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import Route from './screens/Route';

const store = createStore(reducer);


export default function MainScreen() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

