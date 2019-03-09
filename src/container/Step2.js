import React from 'react';
import Typography from '@material-ui/core/Typography';

import Select from '../components/select';
import Radio from '../components/radio';
import Paper from '../components/paper';

import years_data from '../data/years';
import fuel_data from '../data/fuel';
import engines_data from '../data/engine';

import { useFormInput } from '../components/functions';

function Step2 (){
  const fuel = useFormInput('');
  const engine = useFormInput('');
  const year = useFormInput('');

  window.localStorage.setItem('fuel', fuel.value);
  window.localStorage.setItem('engine', engine.value);
  window.localStorage.setItem('year', year.value);
  return (
    <div style={{ maxWidth: 350 }}>
      <Paper>
        <div>
          <Typography variant='display1'>Характеристики</Typography>
        </div>

        <Radio
          labelPlacement='Выберите тип топлива'
          {...fuel}
          options={fuel_data}
        />
        <Select
          header='Выберите обьем двигателя'
          {...engine}
          options={engines_data}
        />
        <br />
        <Select header='Выберите год выпуска' {...year} options={years_data} />
      </Paper>
    </div>
  );
}

export default Step2;
