import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import { gameReducer } from "./gameReducer";
import { apiReducer } from "./apiReducer";
import { IAppState } from "../Interfaces";
// Create the root reducer
export const rootReducer = combineReducers<IAppState>({
  countryState: characterReducer,
  PaisState: gameReducer,
  ApiState: apiReducer
});
