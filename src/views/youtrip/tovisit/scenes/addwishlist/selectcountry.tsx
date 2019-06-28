import { Select } from "antd";
import React from "react";
import { CountryCard } from "./countrycard";
import { IPaisCompleto, INuevoWishItemPais, IKeyValuePair } from "../../../../../redux/InterfacesRedux";

const Option = Select.Option;
interface IProps {
  datacountries: IPaisCompleto[];   
  onAddItem :  (CountryId : INuevoWishItemPais) => void;
}
interface IState {
  selectedvalue: IKeyValuePair
}
class SelectCountry extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedvalue: {
        key: -1,
        value: ""
      } as IKeyValuePair
    };
  }
  handleChange = (value: any) => {
    this.setState({
      selectedvalue: value
    });
  };

  render() {
    console.log(this);
    const options = this.props.datacountries.map((item: IPaisCompleto) => (
      <Option key={item.idCountry}>{item.name}</Option>
    ));
    return (
      <React.Fragment>
        <Select
          labelInValue
          showSearch
          placeholder="Select a country"
          optionFilterProp="children"
          style={{ width: "100%" }}
          defaultActiveFirstOption={false}
          filterOption={(input : string, option: any )   => {        
            return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }   
     
         
          }
          onChange={this.handleChange}
          notFoundContent={null}
        >
          {options}
        </Select>
        {this.state.selectedvalue.value !== "" ? (
          <CountryCard data={this.props.datacountries} valor={this.state.selectedvalue} 
          onAddItem={this.props.onAddItem} />
        ) : null}
      </React.Fragment>
    );
  }
}

export { SelectCountry };
