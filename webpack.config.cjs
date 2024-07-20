const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "3000";

module.exports = (_, { mode }) => {
  const isDevelopment = mode !== "production";
  const WEBAPP_DIR = isDevelopment ? "dfp-dev/" : "/";
  const PORT = process.env.PORT || 3000;
  const config = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: '/',
      filename: isDevelopment ? "[name].[contenthash].bundle.js" : "[name].[contenthash].bundle.js",
      chunkFilename: isDevelopment ? "[name].[contenthash].bundle.js" : "[name].[contenthash].bundle.js",
    },
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".jsx"],
    },
    module: {
      rules: [
        isDevelopment
          ? {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /(node_modules|browser_components)/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true,
                },
              },
            ],
          }
          : {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /(node_modules|browser_components)/,
            use: [
              {
                loader: "babel-loader",
              },
            ],
          },
        {
          test: /\s?css$/,
          // exclude: /(node_modules|browser_components)/,
          // use: [isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", { loader: "sass-loader" }],
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        // {
        //   test: /\.(ts|tsx)$/,
        //   exclude: /node_modules/,
        //   use: "ts-loader",
        // },
        {
          test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          exclude: /node_modules/,
          use: [{ loader: "file-loader" }],
        },
        {
          test: /\.png/,
          exclude: /node_modules/,
          use: [{ loader: "url-loader?limit=10000&mimetype=image/png" }],
        },
        {
          test: /\.m?js/,
          exclude: /node_modules/,
          resolve: {
            fullySpecified: false,
          },
        },
      ].filter(Boolean),
    },

    plugins: [
      isDevelopment
        ? new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "./src/template.html"),
          files: {
            js: ["bundle.js"],
          },
          base: '/'
        })
        : new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "./src/template.html"),
          files: {
            css: "[contenthash].css",
            js: "[contenthash].js",
          },
        }),
    ],

    // plugins: ["@babel/plugin-syntax-jsx"],
    mode: !isDevelopment ? "production" : "development",
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      historyApiFallback: true,
      compress: true,
      port: PORT,
    },
  };
  return config;
};
