var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {

  context: __dirname,

  entry: {
    main: path.join(__dirname, 'src/app/main'),
  },

  output: {
    path: path.resolve('./src/public/dist/'),
    filename: "[name].bundle.js",
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],

  module: {
    loaders: [
      {
        // to transform JSX into JS
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'css!' +
          'postcss!' +
          'sass?sourceMap'
        )
      },
    ],
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, './node_modules')]
  },

  postcss: [
    autoprefixer({
      browsers: ['ios >= 7']
    })
  ],

  devtool: 'source-map',

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
    alias: {
      'app': path.resolve(__dirname, './src/app'),
      'lib': path.resolve(__dirname, './src/app/lib'),
      'containers': path.resolve(__dirname, './src/app/containers'),
      'components': path.resolve(__dirname, './src/app/components'),
      'styles': path.resolve(__dirname, './src/styles'),
      'bootstrap': 'react-bootstrap/lib'
    }
  }
}
