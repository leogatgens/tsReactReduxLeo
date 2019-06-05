import { Continents } from '../data';
import { paises } from '../data'


function getRandomCountry(countriesToShow :any) {
  let limitemaximo = countriesToShow.length;
  let index = Math.floor(Math.random() * limitemaximo);
  return index;
}

function calcularIndiceMaximoParaObtenerCincoPaises(longitud : number){
  let indiceInicialMaximo = (longitud -5);
  if(indiceInicialMaximo < 0 ){    
    return 0;
  }else{
    let indiceInicialTemp = longitud;
    while(indiceInicialTemp > indiceInicialMaximo){
       indiceInicialTemp  = Math.floor(Math.random() * longitud);
    }
    return indiceInicialTemp;
  }
  

}

export function countriesByContinent(indicefilter : number) {
  let filter = Continents[indicefilter];
  let listaAMostar = null;
  if (filter !== 'All') {
    listaAMostar = paises.filter(x => x.Continent === filter);
  } else {
    listaAMostar = paises;
  }

  let indiceRandom = calcularIndiceMaximoParaObtenerCincoPaises(listaAMostar.length);

  let listaFinal = listaAMostar.slice(indiceRandom, (indiceRandom + 5));
  let DatosJuego = { listaPaises: listaFinal, paisActual: getRandomCountry(listaFinal) };
  return DatosJuego;
}


