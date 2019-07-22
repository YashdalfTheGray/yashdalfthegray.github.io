const path = require('path');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
                plugins: () =>
                  argv.mode === 'production'
                    ? [autoprefixer(), cssnano()]
                    : [autoprefixer()]
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
  plugins: [new ExtractTextPlugin('index.css')]
    .concat(
      argv.mode === 'development'
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []
    )
    .concat(argv.mode === 'production' ? [new CompressionWebpackPlugin()] : []),
  stats: {
    colors: true
  }
});
