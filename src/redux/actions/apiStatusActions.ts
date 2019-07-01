import { ApiActionTypes, IBeginApiCallAction,IApiCallSucessAction,IErrorApiAction} from "../InterfacesActions";

export function beginApiCall() {
  return { type: ApiActionTypes.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: ApiActionTypes.API_CALL_ERROR };
}

export function apiCallSucess() {
  return { type: ApiActionTypes.API_CALL_SUCCESS };
}

export type ApiActions =  IBeginApiCallAction | IErrorApiAction | IApiCallSucessAction;