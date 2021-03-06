import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme ) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const  TextButtons = (props) => {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Add country</Button>
      <Button color="primary" className={classes.button}>
        Ordernar
      </Button>    
     
    
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);