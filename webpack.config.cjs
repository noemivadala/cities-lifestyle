const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/app.js',
        animation: './src/js/modules/animations.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    module: { rules: [
        {
            test: /\.(css|s[ac]ss)$/i,
            use: ['style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.(svg|png|jpe?g|gif)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
        }
    ] },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        port: 5000,
        open: true,
        static: path.resolve(__dirname, 'dist')
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    mode: "development"
}