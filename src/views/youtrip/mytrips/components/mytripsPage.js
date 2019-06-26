import React from 'react';
import {Tabs } from 'antd';

import { TituloPrincipal } from '../../../../shared/estiloshtml'
import  PendingTimeLine  from './tripstimeline';
import  VisitedCountries  from './visitedcountries';

const TabPane = Tabs.TabPane;

class MyTripsPage extends React.Component {


  render(){

    return(
      <Tabs defaultActiveKey="1" onChange={this.callback}>   
        <TabPane tab="Lista países visitados" key="1">
           <VisitedCountries data={this.props.data}></VisitedCountries>
        </TabPane>      
        <TabPane tab="Historia de tus viajes" key="2">
          <TituloPrincipal>El cronograma de tus viajes.</TituloPrincipal>                    
          <PendingTimeLine data={this.props.data.data}></PendingTimeLine>
        </TabPane>    
      </Tabs>  

    );     
  }
}


export default MyTripsPage;