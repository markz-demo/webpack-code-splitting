const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        index: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash:8].js',
        clean: true,
    },
    mode: 'development',
    devtool: "source-map",
    target: 'browserslist',
    // watch: false,
    // watchOptions: {
    //     aggregateTimeout: 800,
    // },
    cache: {
        type: 'filesystem',
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [/* 'style-loader', */ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    filename: 'images/[name].[contenthash:8][ext]',
                },
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            }
        ],
    },
    resolve: {
        modules: ["./node_modules"],
        extensions: [".js", ".json", ".jsx", ".css"],
        fallback: { "crypto": false },
        alias: {
            "@images": path.resolve(__dirname, "./assets/images"),
            "common-ui": path.resolve(__dirname, "./common"),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: '[name].[chunkhash:8].css',
            ignoreOrder: true,
        }),
        new CaseSensitivePathsPlugin(),
        new CopyPlugin({
            patterns: [
                { context: './assets', from: 'favicon.ico', to: '', info: { minimized: true } },
                { context: './assets', from: 'index.html', to: '', info: { minimized: true } },
            ],
        })
    ],
    optimization: {
        minimize: false,
        minimizer: [
            new CssMinimizerPlugin({}),
            new TerserPlugin({
                parallel: true,
                // terserOptions: {
                //     compress: {
                //         pure_funcs: ["console.log"] 
                //     }
                // }
            }),
        ],
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                defaultVendors: {
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -10,
                    minSize: 0,
                    // reuseExistingChunk: true,
                },
            }
        }
        //     splitChunks: {
        //         chunks: 'async', // default
        //         minSize: 0, // test for split chunks
        //     },
        //     // usedExports: true,
        //     // splitChunks: {
        //     //     cacheGroups: {
        //     //         defaultVendors: {
        //     //             chunks: 'all',
        //     //             filename: 'vendors.[chunkhash:8].js',
        //     //             test: /[\\/]node_modules[\\/]/,
        //     //             priority: -10,
        //     //             reuseExistingChunk: true,
        //     //         },
        //     //     },
        // },
    },
}
