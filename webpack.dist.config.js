var webpack = require('webpack');

module.exports = {
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/node_modules/, /plugins/, /platforms/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: './www/dist'
  }
};
