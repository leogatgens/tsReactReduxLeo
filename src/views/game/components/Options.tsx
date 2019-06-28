import React from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { IPais } from '../../../redux/InterfacesRedux';
// Create the containers interface
interface IProps {
  data: IPais[],  
  handleSelectedCountry(index : string) : any,
  actualCountry : IPais
}


export class Options extends React.Component<IProps> {
         constructor(props: any) {
           super(props);
           this.state = {
             dense: false,
             secondary: false
           };
         }
         generate() {
           return this.props.data.map((value: IPais, index: number) => (
             <ListItem
               onClick={this.handleClick.bind(this, value.name)}
               key={value.name}
             >
               <ListItemText primary={value.name} />
             </ListItem>
           ));
         }
         handleClick = (event: any) => {
           if (event === this.props.actualCountry.name) {
             this.props.handleSelectedCountry("green");
           } else {
             this.props.handleSelectedCountry("red");
           }
         };
         render() {
           
           return (
             <React.Fragment>
               <Typography variant="h6">
                 Seleccione el país de la bandera:
               </Typography>
               <List dense={false}>{this.generate()}</List>
             </React.Fragment>
           );
         }
}
