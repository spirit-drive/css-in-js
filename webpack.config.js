const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          },
          "sass-loader"
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader, // использовать вместо style-loader
          "style-loader",
          "css-loader"
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.module\.css$/i,
        use: [
          // MiniCssExtractPlugin.loader, // использовать вместо style-loader
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new MiniCssExtractPlugin(),
  ],
};
