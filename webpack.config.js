const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  //   devServer: {
  //     historyApiFallback: true,
  //   },
  //   devServer: {
  //     contentBase: path.join(__dirname, "public"),
  //     compress: true,
  //     port: 8080,
  //     historyApiFallback: true, // This helps with single-page applications
  //   },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Use 'static' instead of 'contentBase'
    },
    compress: true,
    port: 8080,
    historyApiFallback: true, // For single-page applications
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

if (process.env.analyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
