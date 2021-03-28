import store from '../store';
import * as types from '../types';

export const addEmployee = newEmployee => {
  store.dispatch({
    type: types.ADD_EMPLOYEE,
    payload: newEmployee
  });
}

export const removeEmployees = newEmployeesList => {
  store.dispatch({
    type: types.REMOVE_EMPLOYEES,
    payload: newEmployeesList
  });
}

export const editEmployee = newEmployeesList => {
  store.dispatch({
    type: types.EDIT_EMPLOYEE,
    payload: newEmployeesList
  });
}

export const getSelectedEmployeesId = selectedEmployeesId => {
  store.dispatch({
    type: types.GET_SELECTED_EMPLOYEES_ID,
    payload: selectedEmployeesId
  });
}

