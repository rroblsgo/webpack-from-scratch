const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    module: {
        rules: [{
                test: /\.js$/, // files ending with .js
                exclude: /node_modules/, // exclude the node_modules directory
                loader: "babel-loader" // use this (babel-core) loader
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({ // call our plugin with extract method
                    use: ['css-loader', 'sass-loader'], // Use these loaders
                    fallback: 'style-loader' // fallback for any CSS not extracted
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css') // call plugin constructor with name our css file
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'), // A directory or url to serve html content
        historyApiFallback: true, //fallback to /index.html for Single Page Apps
        inline: true, // inline mode (set to falsle to disable including client scripts)
        open: true // open default browser while launching
    },
    devtool: 'eval-source-map' // enable devtool for better debugging experience
}

module.exports = config;