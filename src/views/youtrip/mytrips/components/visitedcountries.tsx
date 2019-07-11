import { List, Avatar, Icon } from "antd";
import React from "react";
import { TituloPrincipal } from "../../../../shared/estiloshtml";
import { IPaisVisitado, IPaisCompleto, INuevoViajeResgistrado } from "../../../../redux/InterfaceModels";
import FormDialog from "./addtrip";

interface IProps {  
  misviajes : IPaisVisitado[];
  initLoading : boolean;
  allcountries : IPaisCompleto[];
  onAddItem: (CountryId: INuevoViajeResgistrado) => void;
}

const VisitedCountries = (props : IProps) => {
  
  const  eliminarPaisesDuplicados = (trips: Array<IPaisVisitado>) => {
    const idPaises = new Set();
    const paisesVisitados = [] as Array<IPaisVisitado>;
  
    trips.forEach((trip : IPaisVisitado) => {
      
      if (idPaises.has(trip.idPais) === false) {
      
        paisesVisitados.push(trip);
      }
      idPaises.add(trip.idPais);
    });
    return paisesVisitados;
  }
  const remove = (CountryId: number) => {
    alert("Are you sure???");
    console.log("remove" + CountryId.toString());
//    props.onDeleteItem(CountryId);
  };

  const   data  = props.misviajes;
  const initLoading = props.initLoading
  const paiseseSinduplicados = eliminarPaisesDuplicados(data);
  return (
    <div>
      <FormDialog allcountries = {props.allcountries} onAddItem={props.onAddItem} />
      <TituloPrincipal>
        Has visitado {paiseseSinduplicados.length} países
      </TituloPrincipal>
      <List
        style={{ marginLeft: 10 }}
        itemLayout="horizontal"
        loading={initLoading}
        dataSource={paiseseSinduplicados}
        renderItem={item => (
          <List.Item
          actions={[
            <Icon
              key={item.idPais}
              type="close-circle"
              theme="filled"
              onClick={() => remove(item.idPais)}
            />
          ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.urlFlag} />}
              title={
                <a
                  href={"https://www.google.com/search?q=" + item.pais}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.pais}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default VisitedCountries;
