const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.styl$/,
                loader: ["style-loader","css-loader","stylus-loader"] 
            },
            {
                test: /\.less$/,
                loader: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require('dart-sass')
                    }
                },
                ],
            },
        ],
      },
};