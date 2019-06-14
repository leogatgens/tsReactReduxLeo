import React from 'react';
import { Tabs } from 'antd';
import {WishList} from '../scenes/viewwishlist/wishlist'
import {Wrapper} from '../../../../shared/estilos'
import {TituloPrincipal} from '../../../../shared/estiloshtml'
import {SelectCountry} from '../scenes/addwishlist/selectcountry'

const TabPane = Tabs.TabPane;

 const TabsView = (props) =>{    


      return(            
        <div>
        {         
           <Tabs defaultActiveKey="1" onChange={props.callback}>                
                <TabPane tab="Wish list" key="1">
                <WishList data = {props} ></WishList>
            </TabPane>
            <TabPane tab="Add to Wish List" key="2">
                <Wrapper>
                    <TituloPrincipal>Países por visitar</TituloPrincipal>
                    <SelectCountry  data = {props}  ></SelectCountry>           
                </Wrapper>
            </TabPane>

            </Tabs>            
        }       
      </div>         
    );
}


export default TabsView;
