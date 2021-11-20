import React, { useReducer } from 'react';

import { reducer } from '../store/reducer';
import { initState } from '../store/initState';

const Body = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  console.log(state);

  return (
    <React.Fragment>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'showText' })}>
          Display Count
        </button>
      </div>
      <div>{state.showText && <div>{state.count}</div>}</div>
    </React.Fragment>
  );
};

export default Body;
