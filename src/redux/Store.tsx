import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { IAppState } from "./Interfaces";
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

export default function configureStore(): Store<IAppState, any> {
  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))
  );
}
