import { Card, Button,DatePicker } from "antd";
import React from "react";
import moment from "moment";
import { IPaisCompleto, IWishListItem } from "../../../../../redux/Interfaces";

let selectedDate = moment();
interface IProps{
  onAddItem : (wishItem : IWishListItem) => void;
  data : IPaisCompleto[];
  valor : object;
}
const CountryCard = (props: any) => {
console.log(props);
  const onChange = (date : any) => {
    selectedDate = date;
  }

  const AddItemToWishList = () => {
    const model = {} as IWishListItem;
   props.onAddItem(model);
  };
  
    
    const valor = props.valor;
    return (
      <div>
        <Card
          title={valor.label}
          bordered={false}
          style={{ width: "100%", marginTop: 10 }}
        >
          <p>Continente: {valor.label} </p>
          <p>Capital: {valor.label} </p>
          <p>
            More information about{" "}
            <a
              href={"https://www.google.com/search?q=" + valor.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {valor.label}
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
