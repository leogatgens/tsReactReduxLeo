import { Reducer } from 'redux';
import {GameActions} from '../actions/GameActions'
import { ICountryState,GameActionTypes, IPais } from '../Interfaces';
import { countriesByContinent,obtenerTop5Random } from '../getContinentText';
import initialState  from "./initialState";
 

export const gameReducer: Reducer<ICountryState, GameActions> = (state = initialState.defaultState, action) => {
  
  console.log(action);
  switch (action.type) {
    case (GameActionTypes.NEXT_COUNTRY):        
      return {
        ...state,
        indexCountry: 0,
        paisesMostrandose: countriesByContinent(action.index,action.paises,  [] as Array<IPais>).listaPaises
      };
      case(GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT):  
      return{
        ...state,
        indexCountry: 0,
        selectedTabIndex : action.index,
        paisesMostrandose: countriesByContinent(action.index,action.paises, [] as Array<IPais>).listaPaises
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
