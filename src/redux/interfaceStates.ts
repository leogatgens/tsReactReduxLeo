import { IPais, IPaisCompleto } from "./InterfaceModels";

export interface IInterfazState {
  readonly colorDivPrincipal: string;
}

export interface ICountryState {
  listaTodosLosPaises: IPais[];
  paisesMostrandose: IPais[];
  paisesHistorialJuego: IPais[];
  indexCountry: number;
  selectedTabIndex: number;
  juegoIniciado: boolean;
  emailUsuario: string;
  continents:string[];
}

export interface IAppState {
  countryState: IInterfazState;
  PaisState: ICountryState;
  ApiState: IApiState;
  yoursTripsState: IYoursTripsState;
}

export interface IApiState {
  readonly apiCallsInProgress: number;
}

export interface IYoursTripsState {
  allCountries: IPaisCompleto[];
  emailUsuario: string;
}
