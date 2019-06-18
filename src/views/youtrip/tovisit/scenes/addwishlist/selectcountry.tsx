import { Select } from "antd";
import React from "react";
import { CountryCard } from "./countrycard";


const Option = Select.Option;
interface IProps{
  data : any
}
class SelectCountry extends React.Component<IProps,any> {
  constructor(props : any) {
    super(props);
    this.state = {
      selectedvalue: {
        key: -1,
        label: ""
      },
      opciones : [],
      error: ""
    };  

    
    
   
  }
  handleChange = (value : any) => {
    this.setState({
      selectedvalue: value
    });
  };

  render() {
    console.log(this.props.data.data.state.datacountries);
    const options = this.props.data.data.state.datacountries.map((item:any) => <Option key={item.idCountry}>{item.name}</Option>);
    return (
      <React.Fragment>
      <Select   
      labelInValue
      showSearch
      placeholder="Select a country"
      optionFilterProp="children"
      style={{ width: '100%' }}       
        defaultActiveFirstOption={false}        
        filterOption={(input, option : any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}      
        onChange={this.handleChange}
        notFoundContent={null}

      >
        {options}
      </Select>
      {this.state.selectedvalue.label !== "" ?   <CountryCard props={ this.props} valor = {this.state.selectedvalue}/> : null}   
      </React.Fragment>
    );
  }
}

export { SelectCountry };
