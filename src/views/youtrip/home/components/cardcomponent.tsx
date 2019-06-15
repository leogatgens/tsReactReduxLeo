import { Card } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { GLOBALS} from '../../../../globals/globals-variables';
import 'antd/dist/antd.css';

const ContenedorCardsMobile = () => {
    return(
        <Card title="Crea un diario de tus viajes">
   
    <Card
      type="inner"
      style={{ width: 300 }}
      title="Registra tus viajes"
      cover={<img alt="example" src={`${GLOBALS.rootImages}/travel1.jpg`}  />}
      extra={<NavLink exact to="/misviajes" className="nav-link" >More</NavLink>}
    >
      Registra tus viajes, las fechas y los lugares que visitados.
    </Card>
    <Card
      style={{ marginTop: 16, width: 300 }}
      type="inner"
      cover={<img alt="example" src={`${GLOBALS.rootImages}/traveltime.jpg`} />}
      title="Registra tus próximos destinos"
      extra={<NavLink exact to="/porvisitar" className="nav-link" >More</NavLink>}
    >
      Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares.
    </Card>
  </Card>
    );
}

export   {ContenedorCardsMobile};