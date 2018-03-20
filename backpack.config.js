const {TsConfigPathsPlugin} = require('awesome-typescript-loader')

module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './src/server/main.ts'

    config.resolve = {
      extensions: [".ts", ".js", ".json"],
      plugins: [
        new TsConfigPathsPlugin()
      ]
    }

    config.module.rules.push(
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    )

    return config
  }
}
