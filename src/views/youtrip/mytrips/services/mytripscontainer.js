import React from 'react';
import 'antd/dist/antd.css';
import TabsControl from '../components/mytripsPage'
import { GLOBALS} from '../../globals/globals-variables';


class TripsOption extends React.Component {  
  constructor(props){
        super(props);      
        this.state = { 
          initLoading: true,                                          
          data : [],
          error : ""     
        };      
  } 

  login() {
    this.props.auth.login();
  }
    
  componentDidMount() {
    if(this.props.auth.isAuthenticated()){   
      const serviceUrl = `${GLOBALS.rootAPI}/travelers/${this.props.auth.userProfile}/trips`;
      var miInit = {               
        headers : { Authorization : `Bearer ${this.props.auth.getAccessToken()}` }          
      }     
      fetch(serviceUrl,miInit)      
          .then(res => {                  
             return res.json();
            }
          )
          .then(              
            (result) => {                 
               this.setState({                
                  initLoading : false,
                  data : result
              });
            }            
          ).catch(error => this.setState({ error : error.message }));
        }
      } 
    render(){
      

      const { isAuthenticated } = this.props.auth;
        const {error} = this.state;
    if(isAuthenticated() === false)
    {
        return( <div> 
                <h4>
                    You are not logged in! Please{' '}
                    <button   style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                      Log In
                    </button >
                    {' '}to continue.
                  </h4>
            </div>);
    }else if(error){     
        return <div>
             <TabsControl data={null}></TabsControl>
          <p>Lo sentimos algo salio mal:  {error.message}</p>  </div>;       
    }else { 
        return (
                  <TabsControl data={this.state}></TabsControl>

            );
      }                
  }

}


export default TripsOption;