const path = require('path');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (_, argv) => ({
    entry: ['./src/index.ts', './src/index.scss'],
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
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 2 }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => argv.mode === 'production' ?
                                [autoprefixer(), cssnano()] :
                                [autoprefixer()]
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: 'svg-inline-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css']
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ],
    stats: {
        colors: true
    }
});
