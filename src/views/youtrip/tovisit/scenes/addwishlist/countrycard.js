import { Card,Button,message,DatePicker } from 'antd';
import React from 'react';
import { GLOBALS} from '../../../globals/globals-variables';
import moment from 'moment';

let selectedDate = moment();

class CountryCard extends React.Component {

   onChange(date) { 
    selectedDate = date;
  }
   AddItemToWishList = () =>{
  
    const newCountry = {
      IdPais : this.props.valor.key,
      DateTrip : selectedDate,
      ClientId : this.props.props.data.data.data.auth.userProfile
    };  
    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${newCountry.ClientId}/wishlists`;
      var miInit = {               
        headers : {
          Authorization : `Bearer ${this.props.props.data.data.data.auth.getAccessToken()}`,
          'Accept': 'application/json',  
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(newCountry)       
      }

       fetch(serviceUrl, miInit )         
        .then(res => {    
          if(res.ok)      
          {
           message.success('successfully added');   
            
           this.props.props.data.onAddItem();

          }else{
            message.error('Try again');
          }
          }
        )
       .catch(
          (error) =>{ 
          console.log(error);
          message.error('Try again');
          }
        );           
  }
  render(){ 
  
    const valor = this.props.valor;     
    return(
        <div>
        <Card title={valor.label} bordered={false} style={{ width: '100%', marginTop:10}}>
          <p>Continente: {valor.label}  </p>
          <p>Capital: {valor.label} </p>
          <p>More information about   <a href={"https://www.google.com/search?q=" + valor.label }   target="_blank" rel="noopener noreferrer">{valor.label}</a></p>         
          
          <DatePicker defaultValue={moment().add(60,'days')} onChange={this.onChange} />
          <Button style={{  marginLeft:10}} icon="plus"  onClick={this.AddItemToWishList}>Add to list</Button>
        </Card>
      </div>
    );
}
}

export {CountryCard};
