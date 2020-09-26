const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootFolder = '../';

const outputFolder = 'dist';

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: 'index.html' });

// Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
// inside your code for any environment checks; UglifyJS will automatically
// drop any unreachable code.
const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development')),
    VERSION: JSON.stringify(require(`${rootFolder}package.json`).version) // eslint-disable-line
});

module.exports = {
    rootFolder,
    outputFolder,
    config: (options) => ({
        mode: options.mode,
        context: path.join(__dirname, rootFolder, 'src'),
        entry: ['./index'],
        output: {
            publicPath: '/',
            filename: '[name]-[hash].js',
            path: path.join(__dirname, rootFolder, outputFolder),
            libraryTarget: 'umd',
            ...options.output
        },
        devtool: options.devtool,
        target: 'web', // Make web variables accessible to webpack, e.g. window
        performance: options.performance || {},
        optimization: {
            namedModules: true,
            splitChunks: {
                name: 'vendor',
                minChunks: 2
            },
            ...options.optimization
        },
        plugins: (options.plugins || []).concat([
            htmlWebpackPlugin,
            definePlugin
        ]),
        resolve: {
            modules: ['node_modules', path.join(__dirname, rootFolder, 'src')],
            alias: {
                SharedProps: path.resolve(__dirname, rootFolder, 'src/shared-props/index.js')
            },
            extensions: ['.js']
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            plugins: [
                                '@babel/transform-object-assign',
                                '@babel/plugin-syntax-dynamic-import',
                                '@babel/transform-runtime'
                            ]
                        }
                    }
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'html-loader',
                    options: {
                        attrs: [':src']
                    }
                },
                {
                    test: /\.(otf|eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    include: [
                        path.resolve(__dirname, rootFolder, 'node_modules/@ui-libraries/vb-theme/assets/fonts')
                    ],
                    options: {
                        name: function filterName(file) {
                            const index = file.indexOf('assets');
                            return file.substring(index, file.length);
                        }
                    }
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: function filterName(file) {
                            const index = file.indexOf('assets');
                            return file.substring(index, file.length);
                        }
                    }
                },
                {
                    test: /\.(png|svg)$/i,
                    include: [
                        path.resolve(__dirname, rootFolder, 'node_modules/@ui-libraries/vb-theme/assets/icons'),
                        path.resolve(__dirname, rootFolder, 'node_modules/@ui-libraries/vb-theme/assets/images')
                    ],
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: function filterName(file) {
                                    const index = file.indexOf('assets');
                                    return file.substring(index, file.length);
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.mp4$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: function filterName(file) {
                                    const index = file.indexOf('assets');
                                    return file.substring(index, file.length);
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.json$/,
                    loader: 'file-loader',
                    type: 'javascript/auto',
                    include: [
                        path.resolve(__dirname, rootFolder, 'node_modules/@ui-libraries/vb-theme/assets/lotties')
                    ],
                    options: {
                        name: function filterName(file) {
                            const index = file.indexOf('assets');
                            return file.substring(index, file.length);
                        }
                    }
                },
                ...options.module.rules
            ]
        }
    }),
    sassLoaders: {
        loader: 'sass-loader',
        options: {
            includePaths: [
                path.resolve(__dirname, rootFolder, 'node_modules/@ui-libraries/vb-theme/styles')
            ]
        }
    },
    sassResourcesLoader: {
        loader: 'sass-resources-loader',
        options: {
            resources: [
                path.resolve(__dirname, rootFolder, 'node_modules/@ui-libraries/vb-theme/styles/utils/_variables.scss'),
                path.resolve(__dirname, rootFolder, 'node_modules/@ui-libraries/vb-theme/styles/utils/_mixins.scss')
            ]
        }
    }
};
