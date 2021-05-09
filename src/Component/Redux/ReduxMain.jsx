import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';

const initialState = {
  count: 0
};
// create Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
}

// create store
let TotalCount = createStore(reducer);

const ReduxMain = () => (
  // pass store through Provider
  <Provider store={TotalCount}>
    <Counter />
  </Provider>
);

export default ReduxMain;
