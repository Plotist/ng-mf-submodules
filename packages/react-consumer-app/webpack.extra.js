const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'react-consumer-app'
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remoteType: 'var',
      remotes: {
        secondRhrc: "secondRhrc"
      }
    })
  ]
};


