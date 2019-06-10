import { ApiActionTypes, IBeginApiCallAction, IErrorApiAction } from "../Interfaces";

export function beginApiCall() {
  return { type: ApiActionTypes.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: ApiActionTypes.API_CALL_ERROR };
}



export type ApiActions =  IBeginApiCallAction | IErrorApiAction;