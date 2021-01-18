import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();
// Store chứa các reducer

const storeApp = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const Store = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Provider store={storeApp}>{props.children}</Provider>;
};

sagaMiddleware.run(rootSaga);
export default Store;
 