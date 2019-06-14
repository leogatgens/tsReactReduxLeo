import { Timeline,Icon } from 'antd';
import React from 'react';

class PendingTimeLine extends React.Component {

convertirFecha(fechatexto){
  if(typeof fechatexto == "string"){
   var dateobj= new Date(fechatexto);     
   var year = dateobj.getFullYear();  
   var  locale = "en-us";
   var month = dateobj.toLocaleString(locale, { month: "long" });
   return month.toString().concat(" ").concat(year.toString());
  }
 
 return fechatexto;
}


  render() {
   
    if(this.props.data.data === null)
      return  null; 

      const {data} = this.props.data.data;
    const indiceFinal = data.length -1;
    return (
      <div style={{ marginLeft:10 }}>
        <Timeline>     
        {data.map((item,i) => (  
        
            this.PintarSegunIndice(i, item,indiceFinal)  
        )
        )}    
        </Timeline>        
      </div>
    );
  }

  PintarSegunIndice(i, item,indiceFinal) {
    if(i === 0){
      return (
        <Timeline.Item key={i + "." + item.idPais} dot={<Icon type="trophy" style={{ fontSize: '26px' }} />} color="red">
        Tu ultimo viaje a {item.pais} en  {this.convertirFecha(item.annoDeLaVisita)}
        </Timeline.Item>      
      )
    }if(i === indiceFinal){
        return (
          <Timeline.Item key={i + "." + item.idPais} dot={<Icon type="compass" style={{ fontSize: '26px' }} />} color="red">
        Tu primer viaje a {item.pais} en  {this.convertirFecha(item.annoDeLaVisita)}
        </Timeline.Item>
        )

    }else{
     return( <Timeline.Item key={i + "." + item.idPais} color= "green">
      {item.pais} en  {this.convertirFecha(item.annoDeLaVisita)}
    </Timeline.Item>)
    }
  } 

  
}

export default PendingTimeLine;