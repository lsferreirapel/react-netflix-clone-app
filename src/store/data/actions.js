export const ADD_DATA = 'ADD_DATA';

export const addData = title => {
  return {
    type: ADD_DATA,
    title,
  };
};
