import * as React from 'react';
import {observer} from 'mobx-react';
import {CountCtx} from '../stores/store';

const Counter: React.SFC = () => {
  const {count, inc, dec} = React.useContext(CountCtx)!;

  return (
    <>
      <hr />
      <p>Counter: {count}</p>
      <button onClick={inc}>+k</button>
      <button onClick={dec}>-</button>
    </>
  );
};

export default observer(Counter);
