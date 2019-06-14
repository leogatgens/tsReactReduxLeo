import React from 'react';
import { Tabs } from 'antd';
import {WishList} from '../scenes/viewwishlist/wishlist'
import {Wrapper} from '../../../estilos'
import {TituloPrincipal} from '../../../components/estiloshtml'
import {SelectCountry} from '../scenes/addwishlist/selectcountry'

const TabPane = Tabs.TabPane;

 const TabsView = (props) =>{    


     if(props.data.state.error)
     {
        return(            
            <div>                    
            <Tabs defaultActiveKey="1" onChange={props.callback}>                
                <TabPane tab="Wish list" key="1">
                <p>Lo sentimos algo salio mal:  {props.data.state.error}</p> 
                </TabPane>
                <TabPane tab="Add to Wish List" key="2">
                <p>Lo sentimos algo salio mal:  {props.data.state.error}</p> 
                </TabPane>
            </Tabs>                        
          </div>
          );
     }
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
