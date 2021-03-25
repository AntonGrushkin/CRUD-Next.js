import * as types from '../types';

const initialState = {
  employees: [
    {
      id: 1,
      name: 'Thomas Hardy',
      email: 'thomashardy@mail.com',
      address: '89 Chiaroscuro Rd, Portland, USA',
      phone: '(171) 555-2222'
    },
    {
      id: 2,
      name: 'Maria Anders',
      email: 'mariaanders@mail.com',
      address: '25, rue Lauriston, Paris, France',
      phone: '(503) 555-9931'
    },
    {
      id: 3,
      name: 'Fran Wilson',
      email: 'franwilson@mail.com',
      address: 'C/ Araquil, 67, Madrid, Spain',
      phone: '(204) 619-5731'
    },
    {
      id: 4,
      name: 'Martin Blank',
      email: 'martinblank@mail.com',
      address: 'Via Monte Bianco 34, Turin, Italy',
      phone: '(480) 631-2097'
    }
  ]
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      }
    case types.REMOVE_EMPLOYEE:
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state;
  }
};