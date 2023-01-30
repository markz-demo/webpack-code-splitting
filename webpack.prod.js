const { merge } = require('webpack-merge')
const base = require('./webpack.config.js')

module.exports = merge(base, {
    mode: 'production',
    devtool: false,
    stats: 'errors-only',
    // stats: {
    //     assets: false,
    //     warnings: false,
    // },
    // infrastructureLogging: {
    //     level: 'error',
    // },
    optimization: {
        minimize: true,
    },
})