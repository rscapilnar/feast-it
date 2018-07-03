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

const bookmarks = [
  {
    url: "https://google.com",
    desc: "google",
    tags: ["search", "engine", "thing"]
  },
  {
    url: "https://reddit.com",
    desc: "reddit",
    tags: ["social", "cats"]
  }
];

store.dispatch({
  type: INIT_BOOKMARKS,
  payload: bookmarks
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
