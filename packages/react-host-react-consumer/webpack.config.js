const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', { targets: "defaults" }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      { test: /\.css$/, use: 'css-loader' },
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      remoteType: 'var',
      remotes: {
        secondRhrc: "secondRhrc"
      }
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "app", "index.html")
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    port: 8888
  },
}