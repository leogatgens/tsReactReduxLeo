import { List, Avatar } from "antd";
import React from "react";
import { TituloPrincipal } from "../../../../shared/estiloshtml";
import { IPaisVisitado } from "../../../../redux/Interfaces";
import FormDialog from "./addtrip";

interface IProps {  
  misviajes : [];
  initLoading : boolean;
  
  
}

const VisitedCountries = (props : IProps) => {
  const  eliminarPaisesDuplicados = (trips: Array<IPaisVisitado>) => {
    const idPaises = new Set();
    const paisesVisitados = [] as Array<IPaisVisitado>;
  
    trips.forEach((trip : any) => {
      if (idPaises.has(trip.idPais) === false) {
        paisesVisitados.push(trip);
      }
      idPaises.add(trip.idPais);
    });
    return paisesVisitados;
  }


  const   data  = props.misviajes;
  const initLoading = props.initLoading
  const paiseseSinduplicados = eliminarPaisesDuplicados(data);
  return (
    <div>
      <FormDialog />
      <TituloPrincipal>
        Has visitado {paiseseSinduplicados.length} países
      </TituloPrincipal>
      <List
        style={{ marginLeft: 10 }}
        itemLayout="horizontal"
        loading={initLoading}
        dataSource={paiseseSinduplicados}
        renderItem={item => (
          <List.Item>
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
