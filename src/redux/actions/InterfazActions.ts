import { InterfazActionTypes,IInterfazChangeColorAction } from '../Interfaces';


export const CambiarFondo = (color : string) => {
  return { type: InterfazActionTypes.CHANGE_COLOR , color }
}

export type InterfazActions =  IInterfazChangeColorAction;

