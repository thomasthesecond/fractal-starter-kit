const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const map = require("postcss-map");
const autoprefixer = require("autoprefixer");
const atImport = require("postcss-import");
const customProperties = require("postcss-custom-properties");
const calc = require("postcss-calc");
const minmax = require("postcss-media-minmax");
const nested = require("postcss-nested");

const filename = "[name]";

const loaders = {
  css: {
    loader: "css-loader",
    options: {
      minimize: false,
    },
  },
  postcss: {
    loader: "postcss-loader",
    options: {
      plugins: () => [
        atImport(),
        map({
          maps: [
            "src/tokens/colors.json",
            "src/tokens/font-family.json",
            "src/tokens/font-size.json",
            "src/tokens/font-weight.json",
            "src/tokens/line-height.json",
            "src/tokens/size.json",
            "src/tokens/spacing.json",
          ],
        }),
        minmax(),
        nested(),
        customProperties(),
        calc(),
        autoprefixer(),
      ],
    },
  },
};

const plugins = [
  new ExtractTextPlugin(`${filename}.css`),
  new CopyWebpackPlugin([
    {
      from: "src/assets/images",
      to: "images",
    },
  ]),
];

module.exports = {
  entry: {
    main: "./src/assets/scripts/main.js",
    global: "./src/assets/scripts/global.js",
    components: "./src/assets/scripts/components.js",
  },
  output: {
    path: path.resolve(__dirname, "tmp/assets"),
    filename: `${filename}.js`,
    libraryTarget: "umd",
  },
  resolve: {
    modules: ["node_modules", "src/components"],
  },
  module: {
    rules: [
      {
        test: /(\.js?)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: ["transform-decorators-legacy"],
          presets: ["es2015"],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [loaders.css, loaders.postcss],
        }),
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.jpg$|\.png$|\.svg$/,
        loader: "file-loader?name=[name].[ext]",
      },
    ],
  },
  plugins,
};
