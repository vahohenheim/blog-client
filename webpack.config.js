const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const excludedFolders = [path.join(__dirname, 'node_modules'), /flexboxgrid/]

module.exports = {
  entry: {
    client: ['./src/index.js'],
    vendor: ['react'],
  },
  mode: "development",
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: excludedFolders,
        loader: 'babel-loader',
        options: { 
          presets: ["@babel/env"]
        }
      },
      // CSS
      {
        test: /assets(\/|\\).*\.css$/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [/flexboxgrid/, /react-times/, /react-day-picker/],
      },
      // Less
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            javascriptEnabled: true,
          },
        }],
      },
      // Fonts
      {
        test: /fonts(\/|\\).*\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './../fonts/',
              outputPath: 'assets/fonts/',
              name: '[name].[ext]',
            },
          },
        ],
      },
      // Images
      {
        test: /\.(jpe?g|png)$/,
        loader: 'responsive-loader',
        options: {
          name: 'assets/images/[hash]-[width].[ext]',
          adapter: require('responsive-loader/sharp'),
          placeholder: true,
        },
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      // SVG
      {
        test: /images(\/|\\).*\.svg$/,
        use: [
          {
            loader: 'svg-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  output: {
    filename: 'assets/scripts/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    port: 3210,
    host: '0.0.0.0',
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ExtractCssChunks({
      filename: 'assets/stylesheets/[name].[hash].css',
    }),
  ]
};