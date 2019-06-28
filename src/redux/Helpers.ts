import { Continents } from '../shared/data';
import { IPais } from './InterfacesRedux';



function getRandomCountry(countriesToShow :Array<IPais>) {
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

export function countriesByContinent(indicefilter : number, paises : Array<IPais>,excluidos : Array<IPais> ):any {

  if(paises.length <=0){
     return { listaPaises: []  as Array<IPais>, indicePaisActual: 0 };
  }

  let filter = Continents[indicefilter];

  let listaAMostar = null;
  if (filter !== 'All') {
    listaAMostar = paises.filter(x => x.continent === filter);
    
  } else {
    listaAMostar = paises;  
  }

  let indiceRandom = calcularIndiceMaximoParaObtenerCincoPaises(listaAMostar.length);



  let listaFinal = listaAMostar.slice(indiceRandom, (indiceRandom + 5));

  
  let DatosJuego = { listaPaises: listaFinal, indicePaisActual: getRandomCountry(listaFinal) };

 
  return DatosJuego;
}


export function obtenerTop5Random(paises : Array<IPais> ): any {

  if(paises.length <=0){
     return { listaPaises: []  as Array<IPais>, indicePaisActual: 0 };
  }  
  let listaAMostar = paises;  
  let indiceRandom = calcularIndiceMaximoParaObtenerCincoPaises(listaAMostar.length);
  let listaFinal = listaAMostar.slice(indiceRandom, (indiceRandom + 5));
  
  let DatosJuego = { listaPaises: listaFinal, indicePaisActual: getRandomCountry(listaFinal) };

 
  return DatosJuego;
}




