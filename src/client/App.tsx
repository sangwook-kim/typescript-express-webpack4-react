import * as React from 'react';
import Counter from './components/Counter';
import {CountCtx, CountStore} from './stores/store';

const App = () => {
  const store = React.useRef(new CountStore(100));

  return (
    <>
      <h1>hello tewr</h1>
      <CountCtx.Provider value={store.current}>
        <Counter />
      </CountCtx.Provider>
    </>
  );
};

export default App;
