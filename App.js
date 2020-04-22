import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import Route from './screens/Route';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

//const store = createStore(reducer);
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
console.log("ROOT SAGA", rootSaga)
sagaMiddleware.run(rootSaga);
console.log(store.getState());

export default function MainScreen() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

