import React, { useEffect, useMemo, useImperativeHandle } from 'react';
import Typography from '@material-ui/core/Typography';
import Select from '../components/select';
import Radio from '../components/radio';
import Paper from '../components/paper';
import MainCard from '../components/MainCard';
import auction_data, { typeCar } from '../data/auction';

import { connect } from 'react-redux';
import { doAddAuction, doAddSize, doAddCyti } from '../actions';
import { useFormInput } from '../components/functions';

function Step1 ({ stepState, onAddAuction, onAddSize, onAddCyti }){
  const auction = useFormInput('auction');

  useEffect(
    () => {
      onAddAuction({ auction: auction.value });
    },
    [ auction.value ],
  );

  const size = useFormInput('size');

  useEffect(
    () => {
      onAddSize({ size: size.value });
    },
    [ size.value ],
  );
  var index = typeCar.filter(item => item[1] === size.value && item[2]);
  const cytiUse = useFormInput('cityUse');

  useEffect(
    () => {
      onAddCyti({ cytiUse: cytiUse.value });
    },
    [ cytiUse.value ],
  );

  return (
    <MainCard header='Доставка'>
      <Paper>
        <Paper>
          <Typography variant='subtitle1'>
            <Typography variant='h3'>
              <Typography variant='display1'>Стоимость : </Typography>{' '}
              {stepState.mainCraft &&
                stepState.mainCraft[index[0] && index[0][2]]}{' '}
              $
            </Typography>
          </Typography>
        </Paper>
        <hr />
        <Radio
          labelPlacement='Выберете Aукцион'
          {...auction}
          options={auction_data}
        />
        <div style={{ display: 'inline-flex' }}>
          <Select header='Размер Машины' {...size} options={typeCar} />
          <div style={{ width: 75 }} />
          <Select
            header='Выберите штат'
            {...cytiUse}
            options={stepState.cytisData}
          />
        </div>

        <br />
        <Typography variant='display1'>
          {stepState.mainCraft && stepState.mainCraft[2]}
        </Typography>
      </Paper>
      <Paper>
        <Typography variant='subtitle1'>
          {stepState.mainCraft &&
            'Доставка в Одесский порт займет  ' +
              stepState.mainCraft[6] +
              ' недель'}
        </Typography>
      </Paper>
    </MainCard>
  );
}
const mapStateToProps = state => ({
  stepState: state.step1State,
});
const mapDispatchToProps = dispatch => ({
  onAddAuction: payload => dispatch(doAddAuction(payload)),
  onAddSize: payload => dispatch(doAddSize(payload)),
  onAddCyti: payload => dispatch(doAddCyti(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
