import { Card, Button,DatePicker } from "antd";
import React from "react";
import moment from "moment";
import { IPaisCompleto, INuevoWishItemPais,IKeyValuePair } from "../../../../../redux/Interfaces";

let selectedDate = moment();
interface IProps{
  onAddItem : (wishItem : INuevoWishItemPais) => void;
  data : IPaisCompleto[];
  valor : IKeyValuePair;
}
const CountryCard = (props: IProps) => {

  const onChange = (date : moment.Moment) => {
    selectedDate = date;
  }

  const AddItemToWishList = () => {
    const model = {} as INuevoWishItemPais;
    model.IdPais = props.valor.key;
    model.DateTrip = selectedDate;
   props.onAddItem(model);
  };
  
    
    const valor = props.valor;
    return (
      <div>
        <Card
          title={valor.value}
          bordered={false}
          style={{ width: "100%", marginTop: 10 }}
        >
          <p>Continente: {valor.value} </p>
          <p>Capital: {valor.value} </p>
          <p>
            More information about{" "}
            <a
              href={"https://www.google.com/search?q=" + valor.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {valor.value}
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
