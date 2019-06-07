import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { IAppState } from './redux/Store';
import Footer from './views/game/components/Footer';
import Header from './shared/component/Header';
import { Continents } from "./shared/data";
import * as countryacciones from "./redux/actions/CountryActions";
import * as characteracciones from "./redux/actions/CharacterActions";
import { AnyAction, bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import TabGame from './views/game/container/TabGame';

// Create the containers interface
interface IProps {
  propiedades: IAppState;
  countryaccions: any;
  characteraccions: any;
}

class App extends React.Component<IProps> {
   handleIndexChange = (index: number) => {   
     
    this.props.characteraccions.CambiarFondo("white");
    this.props.countryaccions.RequestContinents(index,this.props.propiedades.PaisState.listaTodosLosPaises);
  }

  public render() {
 
  return (   
    <React.Fragment>
    <div
          style={{
            background: this.props.propiedades.countryState.colorDivPrincipal,
        
          }}
        >
      <Header/>  
      <TabGame/>
       <Footer
            data={Continents}
            handleIndexChange={this.handleIndexChange}
            selectedIndex={this.props.propiedades.PaisState.selectedTabIndex}
          /> 
      
      </div>
      </React.Fragment>
  );
  }
};

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    propiedades: store,
    
  };
};


function mapDispatchToProps(dispatch :ThunkDispatch<any, any, AnyAction>) {
  return {
    countryaccions: bindActionCreators(countryacciones, dispatch),
    characteraccions: bindActionCreators(characteracciones, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);