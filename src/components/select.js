import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { useFormInput } from './functions';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    position: 'relative',
    rigth: '0%',
  },
  menu: {
    width: 200,
  },
});

function Controlledelect (props){
  const { classes, value, onChange, options, header } = props;

  return (
    <TextField
      id='standard-select-currency-native'
      select
      onChange={onChange}
      value={value}
      menuprops={{
        className: classes.menu,
      }}
      helperText={header}
      margin='normal'>
      {(options || []).map(option => (
        <MenuItem key={option[0]} value={option[1]}>
          {option[1]}
        </MenuItem>
      ))}
    </TextField>
  );
}

Controlledelect.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Controlledelect);
