import React from 'react';
import {Tabs } from 'antd';

import { TituloPrincipal } from '../../../components/estiloshtml';
import  PendingTimeLine  from './timeline';
import  ContriesListTab  from './visitedcountries';

const TabPane = Tabs.TabPane;

class TabsControl extends React.Component {


  render(){

    return(
      <Tabs defaultActiveKey="1" onChange={this.callback}>   
        <TabPane tab="Lista países visitados" key="1">
           <ContriesListTab data={this.props}></ContriesListTab>
        </TabPane>      
        <TabPane tab="Historia de tus viajes" key="2">
          <TituloPrincipal>El cronograma de tus viajes.</TituloPrincipal>                    
          <PendingTimeLine data={this.props}></PendingTimeLine>
        </TabPane>    
      </Tabs>  

    );     
  }
}


export default TabsControl;