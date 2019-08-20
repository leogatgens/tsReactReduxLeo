import * as React from "react";
import * as ReactDOM from "react-dom";
/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from "react-redux";
// Store type from Redux
import { Store } from "redux";
// Import the store function and state
import  { IAppState } from "./redux/interfaceStates";

import * as serviceWorker from "./serviceWorker";
//import "./index.css";
import App from "./App";
import configureStore,{history} from "./redux/Store";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json"

interface IProps {
  store: Store<IAppState>;
  funcion: any;
}
const onRedirectCallback = (appState : any) => {
  console.log(appState);
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

// Generate the store
const store = configureStore();
const Root = (props : IProps) => { 
  
  return (
    <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={props.funcion}>
      
    <Provider store={props.store}>
      <App history={history} />
    </Provider>
    </Auth0Provider>
  );
};

// Render the App
ReactDOM.render(<Root store={store} funcion={onRedirectCallback} />, document.getElementById(
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
