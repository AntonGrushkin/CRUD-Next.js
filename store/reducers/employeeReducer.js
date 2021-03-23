import * as types from './types';

const initialState = {
  employee: [
    {
      name: 'Thomas Hardy',
      email: 'thomashardy@mail.com',
      address: '89 Chiaroscuro Rd, Portland, USA',
      phone: '(171) 555-2222'
    },
    {
      name: 'Maria Anders',
      email: 'mariaanders@mail.com',
      address: '25, rue Lauriston, Paris, France',
      phone: '(503) 555-9931'
    },
    {
      name: 'Fran Wilson',
      email: 'franwilson@mail.com',
      address: 'C/ Araquil, 67, Madrid, Spain',
      phone: '(204) 619-5731'
    },
    {
      name: 'Martin Blank',
      email: 'martinblank@mail.com',
      address: 'Via Monte Bianco 34, Turin, Italy',
      phone: '(480) 631-2097'
    }
  ]
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EMPLOYEE:
      return {
        ...state,
        employee: action.payload
      }  
    default:
      return state;
  }
};