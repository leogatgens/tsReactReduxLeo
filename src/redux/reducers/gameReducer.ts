import { Reducer } from 'redux';
import {GameActions} from '../actions/CountryActions'
import { ICountryState,GameActionTypes, IPais } from '../Interfaces';
import { countriesByContinent } from '../getContinentText';

 
const defaultState: ICountryState = {
  paisesPorContinente: [] as Array<IPais>,
  countriesToShow: [] as Array<IPais>,
  indexCountry: 0,
  selectedTabIndex: 0
}
export const gameReducer: Reducer<ICountryState, GameActions> = (state = defaultState, action) => {
  
  console.log(action);
  switch (action.type) {
    case (GameActionTypes.NEXT_COUNTRY):        
      return {
        ...state,
        indexCountry: 0,
        countriesToShow: countriesByContinent(action.index,action.paises).listaPaises,
      };
      case(GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT):     
      return{
        ...state,
        indexCountry: 0,
        selectedTabIndex : action.index,
        countriesToShow: countriesByContinent(action.index,action.paises).listaPaises,
      };
      case(GameActionTypes.GET_ALL):      
      return{
        ...state,
        paisesPorContinente: action.paises,
        countriesToShow : countriesByContinent(0,action.paises).listaPaises
      
      };
    default:
      return state;
  }
};
