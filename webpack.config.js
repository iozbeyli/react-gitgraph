const nodeExternals = require('webpack-node-externals');
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

const client = {
    entry: './example/src/example.js',
    output: {
        path: path.resolve('./example/build'),
        filename: 'react-gitgraph.js'
    },
    module: {loaders},
};

module.exports = [client];
