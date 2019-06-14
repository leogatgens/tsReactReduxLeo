import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../../redux/Interfaces';
import Footer from '../components/Footer';
import { Continents } from "../../../shared/data";
import * as countryacciones from "../../../redux/actions/GameActions";
import * as characteracciones from "../../../redux/actions/InterfazActions";
import { AnyAction, bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import TabGame from './TabGame';

// Create the containers interface
interface IProps {
  propiedades: IAppState;
  countryaccions: any;
  characteraccions: any;
}

class MainFrame extends React.Component<IProps> {

  componentDidMount() {
    this.props.countryaccions.getAllContinents().catch((error : any) => {
      console.log(error);
      
    });
  }

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
export default connect(mapStateToProps,mapDispatchToProps)(MainFrame);