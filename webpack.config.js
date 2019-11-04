const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackConfiguration = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: {
    vendor: ['react', 'react-dom'],
    app: [path.resolve(__dirname, 'src', 'client', 'index.tsx')],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    overlay: true,
    stats: {
      colors: true,
    },
    hot: true,
    noInfo: true,
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'client', 'components'),
      containers: path.resolve(__dirname, 'src', 'client', 'containers'),
      assets: path.resolve(__dirname, 'src', 'assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html'),
    }),
  ],
};

module.exports = WebpackConfiguration;
