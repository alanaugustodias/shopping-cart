const base = require('./webpack.base.config');

const styleLoader = [
    { loader: 'style-loader' },
    {
        loader: 'css-loader',
        options: { sourceMap: false }
    }
];

module.exports = base.config({
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: styleLoader
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    ...styleLoader,
                    base.sassLoaders,
                    base.sassResourcesLoader
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
});
