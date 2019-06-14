import React from 'react';
import { message } from 'antd';
import { GLOBALS} from '../../globals/globals-variables';
import TabsView from '../scenes/tabsview'



 class TripsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initLoading : true,        
      datacountries : [],
      datawishlist : [],
      error : ''       
  };    
}

componentDidUpdate(prevProps) {
  
  // Typical usage (don't forget to compare props):
  // if (this.props.filtro !== prevProps.filtro) {
  //   this.listarautomovilespormarca(this.props.filtro);
  // }
}

callback = () => {
 
}

componentDidMount() { 
  // store.suscribe(function(){
  //    this.setState({});
  // })
  this.ObtainWishList();   
  this.ListAllCountries();
 
} 


  ObtainWishList() {

    const parent = this.props;
    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${parent.auth.userProfile}/wishlists`;
    var miInit = {
      headers: { Authorization: `Bearer ${parent.auth.getAccessToken()}` }
    };
    fetch(serviceUrl, miInit)
      .then(res => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          initLoading: false,
          datawishlist: result
        });
      }).catch(error => this.setState({ error: error.message }));
  }


   ListAllCountries =()=>{
     const serviceUrl = `${GLOBALS.rootAPI}/paises`;
     fetch(serviceUrl)
       .then(res => {
         return res.json();
       })
       .then((result) => {
         this.setState({           
           datacountries: result
         });
       }).catch(error => this.setState({ error: error.message }));
   }

    login() {
        this.props.auth.login();
    }

    handleAddedCountry =() => { 
      this.ObtainWishList();
  }


  handleRemoveItem = (value) =>{  
   
    const serviceUrl = `${GLOBALS.rootAPI}/travelers/${this.props.auth.userProfile}/wishlists/${value}`;
    var miInit = {               
      headers : {
        Authorization : `Bearer ${this.props.auth.getAccessToken()}`   
      },
      method: 'DELETE'     
    }

     fetch(serviceUrl, miInit )         
      .then(res => {    
        if(res.ok)      
        {
          message.success('Deleted');
          this.refreshData(value);
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
     )  
  }

  refreshData(value) {
    let listaNueva = this.state.datawishlist;
    const filteredItems = listaNueva.filter(item => item.idTrip !== value);
    this.setState({
      datawishlist: filteredItems,
      error: ""
    });
    
  }



    render(){
        const { isAuthenticated } = this.props.auth;
       
        const dependencias ={
            data : this.props,
            state : this.state
            
        };
    return(  
    
        <div>
        {
          isAuthenticated() && (
          <TabsView data={dependencias} onDeleteItem={this.handleRemoveItem} onAddItem={this.handleAddedCountry}></TabsView>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <button   style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
                  Log In
                </button >
                {' '}to continue.
              </h4>
            )
        }
      </div>         
    );
}
}

export {TripsContainer};



// store.dispatch({type : 'SELECTED_COUNTRY',  data : {
//                                               key : -1,
//                                               label : ""
//                                             }
// });
// store.dispatch({type : ''});