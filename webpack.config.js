const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (_, argv) => ({
    entry: ['./src/index.ts', './src/index.css'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                minimize: argv.mode === 'production'
                            }
                        },
                        'postcss-loader'
                    ]
                })
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css']
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ]
});
