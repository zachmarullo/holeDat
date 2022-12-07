import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'client', 'index.tsx'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(s(a|c)ss)$/, //adding style
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      //   // exclude: /node_modules/,
      // },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      //   // exclude: /node_modules/,
      // },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/, ///adding images
        use: {
          loader: 'url-loader',
        },
        // exclude: /node_modules/,
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client', 'index.template.html'),
    }),
  ],
};
