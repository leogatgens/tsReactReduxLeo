import { List, Avatar, Icon } from "antd";
import React from "react";
import { TituloPrincipal } from "../../../../../shared/estiloshtml";
import { IWishListItem } from "../../../../../redux/Interfaces";

interface IProps {
  initLoading: boolean;
  datawishlist: IWishListItem[];
  onDeleteItem: (CountryId: number) => void;
}

const WishList = (props: IProps) => {
  const { initLoading, datawishlist } = props;

  const convertirFecha = (fechatexto: string) => {
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
  };

  const remove = (CountryId: number) => {
    props.onDeleteItem(CountryId);
  };

  return (
    <div>
      <TituloPrincipal>Tus futuros viajes </TituloPrincipal>
      <List
        itemLayout="horizontal"
        style={{ marginLeft: 10 }}
        loading={initLoading}
        dataSource={datawishlist}
        renderItem={(item: IWishListItem) => (
          <List.Item
            actions={[
              <Icon
                key={item.idTrip}
                type="close-circle"
                theme="filled"
                onClick={() => remove(item.idTrip)}
              />
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.urlFlag} />}
              title={
                <a
                  href={"https://www.google.com/search?q=" + item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              }
              description={
                `Viaje a ${item.name} planeado en  ` +
                convertirFecha(item.annoDeLaVisita)
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default WishList;
