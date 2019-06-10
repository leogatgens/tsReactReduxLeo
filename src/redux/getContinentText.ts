import { Continents } from '../shared/data';
import { IPais } from './Interfaces';



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
     return { listaPaises: []  as Array<IPais>, paisActual: {} as IPais };
  }

  let filter = Continents[indicefilter];

  let listaAMostar = []  as Array<IPais>;
  if (filter !== 'All') {
    listaAMostar = paises.filter(x => x.continent === filter);
    console.log("Filtrando.........");  
  } else {
    listaAMostar = paises;  
  }

  let indiceRandom = calcularIndiceMaximoParaObtenerCincoPaises(listaAMostar.length);

  

  let listaFinal = listaAMostar.slice(indiceRandom, (indiceRandom + 5));
  
  let DatosJuego = { listaPaises: listaFinal, paisActual: getRandomCountry(listaFinal) };

 
  return DatosJuego;
}


export function obtenerTop5Random(paises : Array<IPais> ): any {

  if(paises.length <=0){
     return { listaPaises: []  as Array<IPais>, paisActual: {} as IPais };
  }  
  let listaAMostar = paises;  
  let indiceRandom = calcularIndiceMaximoParaObtenerCincoPaises(listaAMostar.length);
  let listaFinal = listaAMostar.slice(indiceRandom, (indiceRandom + 5));
  
  let DatosJuego = { listaPaises: listaFinal, paisActual: getRandomCountry(listaFinal) };

 
  return DatosJuego;
}




