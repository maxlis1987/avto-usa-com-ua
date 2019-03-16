import * as actionTypes from '../constants';

export const doAddAuction = payload => ({
  type: actionTypes.PICK_AUCTION,
  payload,
});

export const doAddSize = payload => ({
  type: actionTypes.PICK_SIZE,
  payload,
});

export const doAddCyti = payload => ({
  type: actionTypes.PICK_CYTI,
  payload,
});

export const doAddCostCar = payload => ({
  type: actionTypes.COST_CAR,
  payload,
});

export const doAddCostTransit = payload => ({
  type: actionTypes.COST_TRANSIT,
  payload,
});


export default { doAddAuction, doAddSize, doAddCyti,doAddCostCar,doAddCostTransit };
