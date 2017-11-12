const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: './functions/server.ts'
  },
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'node',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [
    // /(node_modules|main\..*\.js)/,
    nodeExternals()
  ],
  // devtool: "source-map",
  output: {
    path: path.join(__dirname, 'functions'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts-loader'},
      // {test: /\.js?$/, loader: "source-map-loader"}
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
}
