import * as React from "react";
import * as ReactDOM from "react-dom";
/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from "react-redux";
// Store type from Redux
import { Store } from "redux";
// Import the store function and state
import  { IAppState } from "./redux/Interfaces";

import * as serviceWorker from "./serviceWorker";
//import "./index.css";
import App from "./App";
import configureStore from "./redux/Store";

interface IProps {
  store: Store<IAppState>;
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

// Generate the store
const store = configureStore();
// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  "root"
) as HTMLElement);


// const store = configureStore();
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
