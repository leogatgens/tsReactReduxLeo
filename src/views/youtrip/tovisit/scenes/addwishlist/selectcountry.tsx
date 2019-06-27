import { Select } from "antd";
import React from "react";
import { CountryCard } from "./countrycard";
import { IPaisCompleto, INuevoWishItemPais, IKeyValuePair } from "../../../../../redux/Interfaces";

const Option = Select.Option;
interface IProps {
  datacountries: IPaisCompleto[];   
  onAddItem : (CountryId : INuevoWishItemPais) => void;
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
        label: ""
      }
    };
  }
  handleChange = (value: any) => {
    this.setState({
      selectedvalue: value
    });
  };

  render() {
    
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
        {this.state.selectedvalue.label !== "" ? (
          <CountryCard props={this.props} valor={this.state.selectedvalue} 
          onAddItem={(e : INuevoWishItemPais) => {                        
            this.props.onAddItem(e)
          }} />
        ) : null}
      </React.Fragment>
    );
  }
}

export { SelectCountry };
