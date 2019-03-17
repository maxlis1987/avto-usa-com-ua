import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';

import Select from '../components/select';
import Radio from '../components/radio';
import Paper from '../components/paper';
import Input from '../components/input';
import years_data from '../data/years';
import fuel_data from '../data/fuel';
import engines_data from '../data/engine';

import { useFormInput } from '../components/functions';
import { connect } from 'react-redux';
import { doAddTypeEngine ,doAddTypeFuel, doAddYear, doAddCost} from '../actions';


function Step2 ({ onAddTypeEngine, onAddTypeFuel, onAddYear ,onAddCost, stepState }){
  const {angineType,
    typeFuel,
    yearCost,
    costTamojnya} = stepState;

    const fuelType = useFormInput(null);

    useEffect(() => {
      const typeFuel = fuelType.value;
      onAddTypeFuel({ typeFuel });

    }, [fuelType.value]);

  const engines = useFormInput(null);

  useEffect(() => {
    const angineType = engines.value;
    onAddTypeEngine({ angineType });

  }, [engines.value]);

  const years = useFormInput(null);

  useEffect(() => {
    const year = years.value;
    onAddYear({ year });

  }, [years.value]);
  // let cost;
  const [cost, setCost] = useState(0);

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

    onAddCost({ cost: cost.toFixed(0)})
  }, [typeFuel, angineType,  costTamojnya, yearCost, cost]);

// const [mainCost, setMainCost] = useState(null);

// useEffect(() => {

//   if(costTamojnya > 0 && cost && yearCost){
//     setMainCost(costTamojnya + cost)
//   }
// }, [cost, costTamojnya, yearCost])



  return (
    <div >
      <Paper>
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

        <Typography variant="title" color="inherit">
        Цена автомобиля
        </Typography>
        <Input enableCost />
        {costTamojnya > 0  && (
          <React.Fragment>

          <Typography  variant="subheading" color="secondary">
            {+costTamojnya.toFixed(2) + +((costTamojnya / 100) * 20).toFixed(2) } $ +20% НДС
          </Typography>
          <Typography  variant="subheading" color="secondary">
            {+costTamojnya.toFixed(2) + +((costTamojnya / 100) * 10).toFixed(2) } $ +10% Пошлина
          </Typography>
          {+costTamojnya <= 10000 ? (
          <Typography  variant="subheading" color="secondary">
            {+costTamojnya.toFixed(2) + +((costTamojnya / 100) * 3).toFixed(2) } $ + 3% От Пенсионный
          </Typography>
          ): +costTamojnya < 20000 ?  (
          <Typography  variant="subheading" color="secondary">
            {+costTamojnya.toFixed(2) + +((costTamojnya / 100) * 4).toFixed(2) } $ + 4% От Пенсионный
          </Typography>
          ) : +costTamojnya >= 20000 ? (
          <Typography  variant="subheading" color="secondary">
            {+costTamojnya.toFixed(2) + +((costTamojnya / 100) * 5).toFixed(2) } $ + 5% От Пенсионный
          </Typography>
          ) : null}

          </React.Fragment>
        )}
          <hr />
        {(costTamojnya > 0 && cost > 0) && (
          <Typography  variant="h6" color="primary">
              ОБЩИЙ ТАМОЖЕННЫЙ СБОР: {
             (+cost.toFixed(2) + +((costTamojnya / 100) * 20).toFixed(2) +  +((costTamojnya / 100) * 10).toFixed(2) + +((costTamojnya / 100) * costTamojnya <= 10000 ? 3 : costTamojnya > 10000  && costTamojnya <= 20000 ? 4 : 5).toFixed(2)).toFixed(2)
        }$
          </Typography>
        )}

      </Paper>
    </div>
  );
}
const mapStateToProps = state => ({
  stepState: state.step2State,

});
const mapDispatchToProps = dispatch => ({
  onAddTypeEngine: payload => dispatch(doAddTypeEngine(payload)),
  onAddTypeFuel: payload => dispatch(doAddTypeFuel(payload)),
  onAddYear: payload => dispatch(doAddYear(payload)),
  onAddCost: payload => dispatch(doAddCost(payload)),

});
export default connect(mapStateToProps,mapDispatchToProps)(Step2);

