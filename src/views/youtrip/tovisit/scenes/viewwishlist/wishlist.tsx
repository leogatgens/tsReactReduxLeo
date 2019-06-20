import { List, Avatar, Icon } from "antd";
import React from "react";
import { TituloPrincipal } from "../../../../../shared/estiloshtml";


interface IProps {
  data: any;   
  onDeleteItem : (CountryId : number) => void;
}

class WishList extends React.Component<IProps,any> {
  convertirFecha = (fechatexto: string) => {
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
  remove = (CountryId: number) => {    
    console.log(CountryId);
    this.props.onDeleteItem(CountryId);
  };

  render() {
    
    const { initLoading, datawishlist } = this.props.data;
    return (
      <div>
        <TituloPrincipal>Tus futuros viajes </TituloPrincipal>
        <List
          itemLayout="horizontal"
          style={{ marginLeft: 10 }}
          loading={initLoading}
          dataSource={datawishlist}
          renderItem={(item: any) => (
            <List.Item
              actions={[
                <Icon
                  key={item.idTrip}
                  type="close-circle"
                  theme="filled"
                  onClick={this.remove.bind(this, item.idTrip)}
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
                description={
                  `Viaje a ${item.name} planeado en  ` +
                  this.convertirFecha(item.annoDeLaVisita)
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}



export default WishList;
