import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

import Select from '../components/select';
import Radio from '../components/radio';
import Paper from '../components/paper';
import Input, { UseInput } from '../components/input';
import years_data from '../data/years';
import fuel_data from '../data/fuel';
import engines_data from '../data/engine';

import { useFormInput } from '../components/functions';
import { connect } from 'react-redux';
import { doAddTypeEngine ,doAddTypeFuel, doAddYear, doAddCost } from '../actions';


function Step2 ({
  onAddTypeEngine,
  onAddTypeFuel,
  onAddYear,
  step2State,
  stepState,
  cost,
  children
}){
  const {
    angineType,
    typeFuel,
    yearCost,
    costTamojnya
  } = stepState;

    const fuelType = useFormInput('Бензин');

    useEffect(() => {
      const typeFuel = fuelType.value;
      onAddTypeFuel({ typeFuel });

    }, [fuelType.value]);

  const engines = useFormInput('2.0');

  useEffect(() => {
    const angineType = engines.value;
    onAddTypeEngine({ angineType });

  }, [engines.value]);

  const years = useFormInput(2019);

  useEffect(() => {
    const year = years.value;
    onAddYear({ year });

  }, [years.value]);
  // let cost;
  const [stepCost, setCost] = useState(cost);

  useEffect(() => {
    if(typeFuel !== '' && angineType > 1){


      if(typeFuel == 'Дизель'){
        if(angineType <= 3.0){
          if(yearCost && yearCost > 0){
            setCost((85 * angineType) * yearCost);
          } else
          setCost(85 * angineType);
        }
        if(angineType > 3.0){
          if(yearCost && yearCost > 0){
            setCost((170 * angineType) * yearCost);
          } else
        setCost(170 * angineType);
        }
      }

    if(typeFuel == 'Бензин'){
        if(angineType <= 3.0){
          if(yearCost && yearCost > 0){
            setCost((56 * angineType) * yearCost);
          } else
          setCost(56 * angineType);
        }
        if(angineType > 3.0){
          if(yearCost && yearCost > 0){
            setCost((112 * angineType) * yearCost);
          } else
          setCost(112 * angineType);
        }

      }

    }
    console.log('step2Effect');
  }, [typeFuel, angineType, costTamojnya, yearCost, cost,stepCost]);


  const [brockerValue, setBrockerValue] = useState(stepState.brockerValue);

    useEffect(() => {
      setBrockerValue(stepState.brockerValue)
    }, [stepState.brockerValue]);


  return (
      <Paper background='tomato' header='Расчет розтаможки'>
      <Typography variant="title" color="inherit">
        Выберете тип топлива
        </Typography>
        <Select
          header='Выберете тип топлива'
          {...fuelType}
          options={fuel_data}
        />
        <Typography variant="title" color="inherit">
        Выберете обём двигателя
        </Typography>

        <Select
          header='Выберете обём двигателя'
          {...engines}
          options={engines_data}
        />

        <Typography variant="title" color="inherit">
          Выберете год автомобиля
        </Typography>

        <Select
          header='Выберете обём двигателя'
          {...years}
          options={years_data}
        />

        <Typography variant="title" color="secondary">
          Цена автомобиля {cost}$
        </Typography>
        {costTamojnya > 0  && (
          <React.Fragment>

          <Typography  variant="subheading" color="secondary">
            {Math.ceil(+((cost / 100) * 20))} $ +20% НДС
          </Typography>
          <Typography  variant="subheading" color="secondary">
            {Math.ceil(+((cost / 100) * 10))} $ +10% Пошлина
          </Typography>
          {+cost <= 7340 ? (
          <Typography  variant="subheading" color="secondary">
            {Math.ceil(+((cost / 100) * 3))} $ + 3% От Пенсионный
          </Typography>
          ): +cost < 18350 ?  (
          <Typography  variant="subheading" color="secondary">
            {Math.ceil(+((cost / 100) * 4))} $ + 4% От Пенсионный
          </Typography>
          ) : +cost >= 20000 ? (
          <Typography  variant="subheading" color="secondary">
            {Math.ceil(+((cost / 100) * 5))} $ + 5% От Пенсионный
          </Typography>
          ) : null}

          </React.Fragment>
        )}
        <Typography  variant="h6" color="primary">
          Брокер  <Input brocker={900} enableBrocker/>
        </Typography>
          <hr />
        {(costTamojnya > 0 && cost > 0) && (
          <Typography  variant="h6" color="primary">
              ОБЩИЙ ТАМОЖЕННЫЙ СБОР: {
                Math.ceil(+cost + +((costTamojnya / 100) * 20) +  +((costTamojnya / 100) * 10) + +((costTamojnya / 100) * costTamojnya <= 10000 ? 3 : costTamojnya > 10000  && costTamojnya <= 20000 ? 4 : 5)) + brockerValue
        }$
          </Typography>
        )}

      </Paper>

  );
}
const mapStateToProps = state => ({
  stepState: state.step2State,
  cost: state.summaState.costCar,
});
const mapDispatchToProps = dispatch => ({
  onAddTypeEngine: payload => dispatch(doAddTypeEngine(payload)),
  onAddTypeFuel: payload => dispatch(doAddTypeFuel(payload)),
  onAddYear: payload => dispatch(doAddYear(payload)),
  onAddCost: payload => dispatch(doAddCost(payload)),

});
export default connect(mapStateToProps,mapDispatchToProps)(Step2);

