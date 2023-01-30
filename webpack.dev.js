const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.config.js')
// const prod = require('./webpack.prod.js')

module.exports = merge(base, {
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "../public"),
        },
        host: '0.0.0.0',
        port: 3000,
        compress: false,
        hot: true,
        historyApiFallback: true,
        client: {
            logging: 'error',
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    }
})