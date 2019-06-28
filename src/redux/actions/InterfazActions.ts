import { InterfazActionTypes,IInterfazChangeColorAction } from '../InterfacesRedux';


export const CambiarFondo = (color : string) => {
  return { type: InterfazActionTypes.CHANGE_COLOR , color }
}

export type InterfazActions =  IInterfazChangeColorAction;

