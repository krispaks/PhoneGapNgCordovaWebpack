var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', './www/app/app.js']
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/node_modules/, /plugins/, /platforms/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' },
       { test: /\.scss$/, loader: ['raw-loader', 'sass-loader']}
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: './www/dist'
  },
  plugins: [
    /* probably wanna put this in a separate webpack file for prod.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })*/
  ]
};
