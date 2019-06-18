import { Select } from "antd";
import React from "react";


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
      <Select    style={{ width: 320 }}     
        value={this.state.value}      
        defaultActiveFirstOption={false}        
        filterOption={false}        
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export { SelectCountry };
