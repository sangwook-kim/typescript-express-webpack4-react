import debug from 'debug';

import * as packageInfo from '../package.json';
import {server} from './server/Server';

(() => {
  debugger;
  const log = debug('tewr');
  log(`is starting - ${process.env.NODE_ENV}`);
  const app = server();

  app.listen(packageInfo.port, () => {
    log('is listening');
  });
})();
