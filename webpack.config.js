const path = require('path');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin2');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = (mode) => mode === 'development';
const isProd = (mode) => mode === 'production';

module.exports = (_, argv) => ({
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  mode: argv.mode,
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [autoprefixer()].concat(
                  isProd(argv.mode) ? [cssnano()] : []
                ),
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin({
      verbose: isDev(argv.mode),
      cleanOnceBeforeBuildPatterns: ['artifacts', '*.gz', '*.js', '*.css'],
    }),
    new Visualizer({
      filename: './artifacts/stats.html',
    }),
  ],
  optimization: {
    minimize: isProd(argv.mode),
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  stats: {
    colors: true,
  },
});
