import { Continents } from '../shared/data';
import { IPais } from './Interfaces';



function getRandomCountry(countriesToShow :Array<IPais>,excluidos : Array<IPais>) {
  let limitemaximo = countriesToShow.length;
  console.log("Limite maximo........." + limitemaximo);  
  let index = Math.floor(Math.random() * limitemaximo);
  console.log("index........." + index);  
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
    console.log(indiceInicialTemp);
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

  console.log("indiceRandom........." + indiceRandom);  

  let listaFinal = listaAMostar.slice(indiceRandom, (indiceRandom + 5));
  
  let DatosJuego = { listaPaises: listaFinal, paisActual: getRandomCountry(listaFinal,excluidos) };

 
  return DatosJuego;
}


