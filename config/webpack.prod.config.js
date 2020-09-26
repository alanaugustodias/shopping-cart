const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base.config');

const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: false
    }
};

const compressionPlugin = new CompressionPlugin();
const copyWebpackPlugin = new CopyWebpackPlugin([
    {
        from: path.resolve(__dirname, base.rootFolder, 'src/package.json'),
        to: path.resolve(__dirname, base.rootFolder, 'dist/package.json')
    }
]);
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist'], {
    root: path.join(__dirname, base.rootFolder),
    verbose: true,
    dry: false
});

module.exports = base.config({
    mode: 'production',
    devtool: 'cheap-source-map',
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        compressionPlugin,
        copyWebpackPlugin,
        cleanWebpackPlugin
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, cssLoader]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    cssLoader,
                    base.sassLoaders,
                    base.sassResourcesLoader
                ]
            }
        ]
    }
});
