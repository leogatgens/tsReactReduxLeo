import * as React from 'react';
import { connect } from 'react-redux';
//import '../App.css';
import { IAppState } from './redux/Store';

import Footer from './views/components/Footer';
import {CountryImage} from './views/components/Flag'
import { Continents } from "./data";
import { ICountryState } from './redux/Interfaces';
import * as actions from "./redux/actions/CountryActions";
import { AnyAction, bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const data = {
  title : 'La hora ha llegado',
  paragraph : 'Todo fue lo que fue'
}

// Create the containers interface
interface IProps {
  propiedades: ICountryState;
  acciones : any;
}


class App extends React.Component<IProps> {
   handleIndexChange = (index: number) => {    
    this.props.acciones.RequestContinents(index);
  }

  public render() {
 
  return (   
    <>
      
      <CountryImage title = {data.title}></CountryImage>
      <Footer
            data={Continents}
            handleIndexChange={this.handleIndexChange}
            selectedIndex={this.props.propiedades.selectedTabIndex}
          />
    </>
  );
  }
};

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    propiedades: store.PaisState,
    
  };
};
// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
//   return {
//     getPeople: () => dispatch(actions.CambiarFondo('green')),
   
//   };
// };

function mapDispatchToProps(dispatch :ThunkDispatch<any, any, AnyAction>) {
  return {
    acciones: bindActionCreators(actions, dispatch)    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);