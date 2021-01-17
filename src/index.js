import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import registerServiceWorker from "./registerServiceWorker";
import AppChat from "./components/AppChat";
import injectTapEventPlugin from "react-tap-event-plugin";

ReactDOM.render(<AppChat />, document.getElementById("root"));
registerServiceWorker();