import debug from 'debug';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import WebpackConfig from '../../webpack.config';

export const server = () => {
  const app = express();
  const log = debug('tewr:server');
  log(`is running in ${process.env.NODE_ENV} mode`);

  if (process.env.NODE_ENV === 'development') {
    // TODO - webpack config merge
    WebpackConfig.mode = 'development';
    WebpackConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true');
    WebpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    const compiler = webpack(WebpackConfig as webpack.Configuration);

    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: '/',
      }),
    );
    app.use(webpackHotMiddleware(compiler));
  }

  app.use(express.static('./dist'));

  app.get('/ping', (_, res) => {
    res.send('💗❤️💗❤️');
  });

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'dist', 'index.html'));
  });

  return app;
};
