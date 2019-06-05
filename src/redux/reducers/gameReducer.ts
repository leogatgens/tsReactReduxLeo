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
  let resultado = null;
  console.log(action);
  switch (action.type) {
    case (GameActionTypes.NEXT_COUNTRY):
        resultado = countriesByContinent(action.index);
      return {
        ...state,
        countriesToShow: resultado.listaPaises,
        indexCountry: resultado.paisActual,
      };
      case(GameActionTypes.REQUEST_COUNTRIES_BY_CONTINENT):
      resultado = countriesByContinent(action.index);
      return{
        ...state,
        countriesToShow: resultado.listaPaises,
        indexCountry: resultado.paisActual,
        selectedTabIndex: action.index

      };
    default:
      return state;
  }
};
