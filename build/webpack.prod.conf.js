const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')

module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        library:'vue-dropdown-menu',
        libraryTarget: 'umd',
    }
})