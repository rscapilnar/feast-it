import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

import { INIT_BOOKMARKS } from "./actions";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

let store = createStoreWithMiddleware(reducers);

// get bookmarks from localStorage and parse back into array
const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

// if we have bookmarks, i.e. the localStorage wasn't empty, dispatch action to put them in the store
if (bookmarks) {
  store.dispatch({
    type: INIT_BOOKMARKS,
    payload: bookmarks
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
