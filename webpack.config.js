const webpack = require('webpack');
var path = require('path');
const loaders = [
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'stage-0', 'react']
        }
    }
];

const WebpackConfig = {
    entry: './src/GitGraph.js',
    output: {
        path: path.resolve('./lib'),
        filename: 'react-gitgraph.js',
        libraryTarget: 'umd',
        library: 'react-gitgraph'
    },
    module: {loaders},
};

if ( process.env.NODE_ENV === 'production' ) {

    WebpackConfig.externals = {
        'react': 'react',
        'react-dom': 'react-dom'
    };

    WebpackConfig.plugins = [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
            },
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
    ];

}

const ExampleWebpackConfig = {
  entry: './example/src/example.js',
  output: {
      path: path.resolve('./example/build'),
      filename: 'react-gitgraph.js'
  },
  module: {loaders},
};

module.exports = [WebpackConfig,ExampleWebpackConfig];
