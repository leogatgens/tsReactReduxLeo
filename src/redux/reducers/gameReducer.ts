import { Reducer } from 'redux';
import {GameActions} from '../actions/CountryActions'
import { ICountryState,GameActionTypes, IPais } from '../Interfaces';
import { countriesByContinent } from '../getContinentText';

 
const defaultState: ICountryState = {
  countriesToShow: [] as Array<IPais>,
  indexCountry: 0,
  selectedTabIndex: 0
}
export const gameReducer: Reducer<ICountryState, GameActions> = (state = defaultState, action) => {
  let resultado = null;
  console.log(action);
  switch (action.type) {
    case (GameActionTypes.NEXT_COUNTRY):
        
      return {
        ...state,
        indexCountry: 0,
      };
      case(GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT):
     
      return{
        ...state,
        indexCountry: 0,
      };
      case(GameActionTypes.GET_ALL):
      
      return{
        ...state,
        countriesToShow: countriesByContinent(0,action.paises).listaPaises,
      
      };
    default:
      return state;
  }
};
