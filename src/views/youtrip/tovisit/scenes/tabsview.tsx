import React from "react";
import { Tabs } from "antd";
import  WishList from "./viewwishlist/wishlist";
import { Wrapper } from "../../../../shared/estilos";
import { TituloPrincipal } from "../../../../shared/estiloshtml";
import { SelectCountry } from "./addwishlist/selectcountry";
import { IStateTripsContainer, INuevoWishItemPais } from "../../../../redux/Interfaces";

const TabPane = Tabs.TabPane;

interface IProps {
  dependencias: IStateTripsContainer;
  onDeleteItem :  (CountryId : number) => void;
  onAddItem :  (CountryId : INuevoWishItemPais) => void;
}

const TabsView = (props: IProps) => {
  console.log(props);
  return (
    <div>
      {
        <Tabs defaultActiveKey="1">
          <TabPane tab="Wish list" key="1">
            <WishList datawishlist={props.dependencias.datawishlist} onDeleteItem={props.onDeleteItem} initLoading={props.dependencias.initLoading} />
          </TabPane>
          <TabPane tab="Add to Wish List" key="2">
            <Wrapper>
              <TituloPrincipal>Países por visitar</TituloPrincipal>
              <SelectCountry datacountries={props.dependencias.datacountries} onAddItem={props.onAddItem} />
            </Wrapper>
          </TabPane>
        </Tabs>
      }
    </div>
  );
};

export default TabsView;
