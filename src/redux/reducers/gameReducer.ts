import { Reducer } from 'redux';
import {GameActions} from '../actions/CountryActions'
import { ICountryState,GameActionTypes } from '../Interfaces';
import { Continents } from '../../data';
import { countriesByContinent } from '../getContinentText';

const listaPaisesInicial = countriesByContinent(Continents.indexOf('All'));

const defaultState: ICountryState = {
  countriesToShow: listaPaisesInicial.listaPaises,
  indexCountry: listaPaisesInicial.paisActual,
  selectedTabIndex: 0
}
export const gameReducer: Reducer<ICountryState, GameActions> = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case (GameActionTypes.NEXT_COUNTRY):
      return {
        ...state,
        selectedTabIndex: action.index
      };
      case(GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT):
      return{
        ...state,
        selectedTabIndex: action.index

      };
    default:
      return state;
  }
};
