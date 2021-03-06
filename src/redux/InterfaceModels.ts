import moment from "moment";

// Define the Character State

export interface IPais {
  id: number;
  name: string;
  flagUrl: string;
  continent: string;
}

export interface IPaisVisitado {
  idPais: number;
  pais: string;
  urlFlag: string;
  continent: string;
  annoDeLaVisita: string;
  codigoPais : string;
}

export interface IWishListItem {
  idTrip: number;
  idPais: number;
  name: string;
  urlFlag: string;
  annoDeLaVisita: string;
}

export interface IStateTripsContainer {
  initLoading: boolean;
  datacountries: IPaisCompleto[];
  datawishlist: IWishListItem[];
  error: string;
}

export interface IPaisCompleto {
  capital: string;
  continent: string;
  idCountry: number;
  name: string;
  urlFlag: string;
}

export interface INuevoWishItemPais {
  IdPais: number;
  DateTrip: moment.Moment;
}

export interface IKeyValuePair {
  key: number;
  value: string;
}


export interface INuevoViajeResgistrado {
  IdPais: number;
  VisitedDate: moment.Moment;
  ClientId : string;
}