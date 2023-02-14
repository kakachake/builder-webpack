const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ESLintPlugin = require("eslint-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const fg = require("fast-glob");

const projectRoot = process.cwd();

function setMPA() {
  const entry = {};
  const htmlPlugins = [];
  const file = fg.sync("src/**/index{.js,.jsx}", {
    absolute: true,
  });

  file.forEach((item) => {
    const dirName = path.dirname(item);
    const name = path.relative(`${projectRoot}/src`, dirName) || "index";

    htmlPlugins.push(
      new HTMLWebpackPlugin({
        template: `${dirName}/index.html`,
        filename: `${name}.html`,
        chunks: [name, "default", "defaultVendors"],
      })
    );
    entry[name] = {
      import: `${item}`,
    };
  });
  return {
    entry,
    htmlPlugins,
  };
}

const { entry, htmlPlugins } = setMPA();

module.exports = {
  entry,
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "current",
                    },
                  },
                ],
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css|\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 3,
            },
          },
          "postcss-loader",
          {
            loader: "px2rem-loader",
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[contenthash:8]-[name][ext][query]",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  output: {
    path: path.resolve(projectRoot, "dist"),
    filename: "[name]-[chunkhash:8].js",
    clean: true,
    assetModuleFilename: "assets/[contenthash:8]-[name][ext][query]",
  },
  plugins: [
    ...htmlPlugins,
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style/[name]-[contenthash:8].css",
      chunkFilename: "style/[name]-[contenthash:8].css",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      context: path.resolve(__dirname, "src"),
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  experiments: {
    topLevelAwait: true,
  },
  stats: "errors-only",
};
