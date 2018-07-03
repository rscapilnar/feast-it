import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

let store = createStoreWithMiddleware(reducers);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
