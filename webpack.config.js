const path = require('path');

const postcssPresentEnv = require('postcss-preset-env');

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
                test: /\.p?css$/,
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
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    postcssPresentEnv()
                                ]
                            }
                        }
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
