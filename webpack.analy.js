const { merge } = require('webpack-merge')
const base = require('./webpack.config.js')
const prod = require('./webpack.prod.js')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(base, {
    plugins: [
        new BundleAnalyzerPlugin(),
    ],
})