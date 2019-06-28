import { Card, Button,DatePicker } from "antd";
import React from "react";
import moment from "moment";
import { IPaisCompleto, INuevoWishItemPais,IKeyValuePair } from "../../../../../redux/InterfacesRedux";

let selectedDate = moment();
interface IProps{
  onAddItem : (wishItem : INuevoWishItemPais) => void;  
  valor : IPaisCompleto;
}
const CountryCard = (props: IProps) => {

  const onChange = (date : moment.Moment) => {
    selectedDate = date;
  }

  const AddItemToWishList = () => {
    const model = {} as INuevoWishItemPais;
    model.IdPais = props.valor.idCountry;
    model.DateTrip = selectedDate;
   props.onAddItem(model);
  };
  console.log(props);
    
    const pais = props.valor;
    return (
      <div>
        <Card
          title={pais.name}
          bordered={false}
          style={{ width: "100%", marginTop: 10 }}
        >
          <p>Continente: {pais.continent} </p>
          <p>Capital: {pais.capital} </p>
          <p>
            More information about{" "}
            <a
              href={"https://www.google.com/search?q=" + pais.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pais.name}
            </a>
          </p>

          <DatePicker
            defaultValue={moment().add(60, "days")}
            onChange={onChange}
          />
          <Button
            style={{ marginLeft: 10 }}
            icon="plus"
            onClick={AddItemToWishList}
          >
            Add to list
          </Button>
        </Card>
      </div>
    );
  
}

export { CountryCard };
