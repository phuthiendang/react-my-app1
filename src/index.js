import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/*
const Info = props => {
  return (
    <div>
      <p>Username: {props.username}</p>
    </div>
  );
};

const isAdmin = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>Welcome: Admin</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const Result = isAdmin(Info);
*/
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
