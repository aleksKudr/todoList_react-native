import TYPE from '../type';

export const add = name => {
  return {
    type: TYPE.ADD,
    payload: name
  };
};

export const select = index =>  {
  return {
    type: TYPE.SELECT,
    payload: index
  };
};
