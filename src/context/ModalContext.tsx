import React from 'react';

const initialState = {
  showModal: false,
  titleText: '',
  size: 'sm',
  overallText: '',
  onCancelAction: () => {},
  cancelBtnText: '',
};

const reducers = () => {};

const ModalContext = React.createContext(initialState);

export const ModalProvider = (children: React.ReactNode) => {
  <ModalContext.Provider value={React.useReducer(reducers, initialState)}></ModalContext.Provider>;
};
