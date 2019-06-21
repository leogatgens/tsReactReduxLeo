import { Card, Button, message, DatePicker } from "antd";
import React from "react";
import moment from "moment";

let selectedDate = moment();

class CountryCard extends React.Component<any> {
  onChange(date : any) {
    selectedDate = date;
  }
  AddItemToWishList = () => {
    const newWishtCountry = {
      IdPais: this.props.valor.key,
      DateTrip: selectedDate,
      ClientId: null
    };
   this.props.onAddItem(newWishtCountry);
  };
  render() {
    
    const valor = this.props.valor;
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
            onChange={this.onChange}
          />
          <Button
            style={{ marginLeft: 10 }}
            icon="plus"
            onClick={this.AddItemToWishList}
          >
            Add to list
          </Button>
        </Card>
      </div>
    );
  }
}

export { CountryCard };
