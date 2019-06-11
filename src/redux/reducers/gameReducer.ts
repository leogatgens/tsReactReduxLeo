import { Reducer } from 'redux';
import {GameActions} from '../actions/GameActions'
import { ICountryState,GameActionTypes, IPais } from '../Interfaces';
import { countriesByContinent,obtenerTop5Random } from '../Helpers';
import initialState  from "./initialState";
 

export const gameReducer: Reducer<ICountryState, GameActions> = (state = initialState.defaultState, action) => {
  
  let resultado  = null;
  switch (action.type) {
    case (GameActionTypes.NEXT_COUNTRY):   
     resultado = countriesByContinent(action.index,action.paises,  [] as Array<IPais>)
      return {
        ...state,
        indexCountry: resultado.indicePaisActual,
        paisesMostrandose: resultado.listaPaises
      };
      case(GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT):  
       resultado = countriesByContinent(action.index,action.paises,  [] as Array<IPais>)
      return{
        ...state,
        indexCountry: resultado.indicePaisActual,
        selectedTabIndex : action.index,
        paisesMostrandose: resultado.listaPaises
      };
      case(GameActionTypes.GET_ALL_SUCCESS):      
      return{
        ...state,
        listaTodosLosPaises: action.paises,
        paisesMostrandose : obtenerTop5Random(action.paises).listaPaises
      
      };
    default:
      return state;
  }
};
