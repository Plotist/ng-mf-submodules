const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  entry: './src/index.js',
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
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new ModuleFederationPlugin({
      name: "secondRhrc",
      library: { type: "var", name: "secondRhrc" },
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App/App',
        './AppModule': './src/App/AppModule',
      },
      shared: {
        ...deps,
        react: {
          // 'eager' Needed for rendering this app as a standalone. See more here:
          // https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          // 'eager' needed for rendering this app as a standalone. See more here:
          // https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/
          eager: true,
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    port: 8088
  },
}