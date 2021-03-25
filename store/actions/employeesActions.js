import store from '../store';
import * as types from '../types';

export const addEmployee = newEmployee => {
  store.dispatch({
    type: types.ADD_EMPLOYEE,
    payload: newEmployee
  });
}

export const removeEmployee = newEmployeesList => {
  store.dispatch({
    type: types.REMOVE_EMPLOYEE,
    payload: newEmployeesList
  });
}

