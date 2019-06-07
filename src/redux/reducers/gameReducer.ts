import { Reducer } from 'redux';
import {GameActions} from '../actions/CountryActions'
import { ICountryState,GameActionTypes, IPais } from '../Interfaces';
import { countriesByContinent } from '../getContinentText';

 
const defaultState: ICountryState = {
  listaTodosLosPaises: [] as Array<IPais>,
  paisesMostrandose: [] as Array<IPais>,
  paisesHistorialJuego: [] as Array<IPais>,
  indexCountry: 0,
  selectedTabIndex: 0,
  juegoIniciado : false
}
export const gameReducer: Reducer<ICountryState, GameActions> = (state = defaultState, action) => {
  
  
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
      case(GameActionTypes.GET_ALL):      
      return{
        ...state,
        paisesPorContinente: action.paises,
        countriesToShow : countriesByContinent(0,action.paises, [] as Array<IPais>).listaPaises
      
      };
    default:
      return state;
  }
};
