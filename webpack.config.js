const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: 'index.ejs',
    baseUrl: process.env.NODE_ENV == 'development' ? '/' : 'https://alanaugustodias.github.io/shopping-cart/'
});

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: ['./index'],
    output: {
        publicPath: '',
        filename: '[name]-[hash].js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    devtool: 'cheap-source-map',
    target: 'web',
    plugins: [
        new CleanWebpackPlugin(),
        htmlWebpackPlugin
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};
