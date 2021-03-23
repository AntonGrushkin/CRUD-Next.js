import * as types from './types';

export const fetchEmployee = () => async dispatch => {
  dispatch({
    type: types.ADD_EMPLOYEE,
    payload: ['hello', 'world']
  });
}