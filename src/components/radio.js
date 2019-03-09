import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function RadioGroupComponent (props){
  const { labelPlacement, options, value, onChange } = props;

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{labelPlacement}</FormLabel>
      <RadioGroup
        aria-label='position'
        onChange={onChange}
        name='position'
        value={value}
        row>
        {(options || [])
          .map(option => (
            <FormControlLabel
              value={option.value}
              key={option.value}
              control={<Radio color='secondary' />}
              label={option.value}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupComponent;
