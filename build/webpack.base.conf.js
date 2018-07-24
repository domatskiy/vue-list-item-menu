const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    externals: [
        'vue',
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        // filename: path.join('[name]', 'index.js'),
        library:'vue-dropdown-menu',
        // libraryExport: 'default',
        libraryTarget: 'umd'
        // umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new UglifyJSPlugin({
            mangle: false,
            beautify: true
        })
    ]
}