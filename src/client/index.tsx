import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

setTimeout(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
}, 1000);
