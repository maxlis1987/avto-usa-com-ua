import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { useFormInput } from './functions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 300,
  },
});

function Input (props){
  const { classes, placeholder } = props;
  const value = useFormInput('');

  return (
    <div className={classes.container}>
      <TextField
        id='standard-textarea'
        label={placeholder}
        placeholder={placeholder}
        multiline
        {...value}
        className={classes.textField}
        margin='normal'
      />
    </div>
  );
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Input);
