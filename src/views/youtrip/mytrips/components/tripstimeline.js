import { Timeline, Icon } from "antd";
import React from "react";

const TripsTimeLine = props => {

  const  pintarSegunIndice = (i, item, indiceFinal) => {
    if (i === 0) {
      return (
        <Timeline.Item
          key={i + "." + item.idPais}
          dot={<Icon type="trophy" style={{ fontSize: "26px" }} />}
          color="red"
        >
          Tu ultimo viaje a {item.pais} en{" "}
          {convertirFecha(item.annoDeLaVisita)}
        </Timeline.Item>
      );
    }
    if (i === indiceFinal) {
      return (
        <Timeline.Item
          key={i + "." + item.idPais}
          dot={<Icon type="compass" style={{ fontSize: "26px" }} />}
          color="red"
        >
          Tu primer viaje a {item.pais} en{" "}
          {convertirFecha(item.annoDeLaVisita)}
        </Timeline.Item>
      );
    } else {
      return (
        <Timeline.Item key={i + "." + item.idPais} color="green">
          {item.pais} en {convertirFecha(item.annoDeLaVisita)}
        </Timeline.Item>
      );
    }
  }
  const convertirFecha = (fechatexto)  =>{
    if (typeof fechatexto == "string") {
      var dateobj = new Date(fechatexto);
      var year = dateobj.getFullYear();
      var locale = "en-us";
      var month = dateobj.toLocaleString(locale, { month: "long" });
      return month
        .toString()
        .concat(" ")
        .concat(year.toString());
    }

    return fechatexto;
  }

  
  console.log(props.data);

  const indiceFinal = props.data.length - 1;

  return (
    <div style={{ marginLeft: 10 }}>
      <Timeline>
        {props.data.map((item, i) =>
          pintarSegunIndice(i, item, indiceFinal)
        )}
      </Timeline>
    </div>
  );
};

export default TripsTimeLine;
