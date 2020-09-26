const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'src'),
    entry: ['./index'],
    output: {
        publicPath: '/',
        filename: '[name]-[hash].js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    devtool: 'cheap-source-map',
    target: 'web',
    plugins: [htmlWebpackPlugin],
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
