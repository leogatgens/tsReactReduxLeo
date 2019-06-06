import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface IFooter {
    selectedIndex: number,
    data : Array<string>,
    handleIndexChange(index : number) : any,
    classes : any
    

  }
class Footer extends React.Component<IFooter> { 
   
  handleChange = (event : any,index : number) => { 
  this.props.handleIndexChange(index);
};
  render() {
    
    const { classes } = this.props;
  
    return (
      <Paper className={classes.root}>    
        <Tabs
          value={this.props.selectedIndex}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          
        {
          this.props.data.map((item : any) =>{
            return  <Tab label={item} key={item} />
          })
        }
        </Tabs>
      </Paper>
    );
  }
}


export default withStyles(styles)(Footer);

