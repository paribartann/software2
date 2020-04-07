import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import Route from './screens/Route';
import { translate } from './screens/AccessPhotoPage/saga';


const sagaMiddleware = createSagaMiddleware();

//const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(translate);
console.log(store.getState());

export default function MainScreen() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

