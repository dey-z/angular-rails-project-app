const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const webpack = require('webpack')
const config = require('@rails/webpacker/package/config')
const { resolve } = require('path')

environment.plugins.prepend('ContextReplacement',
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(@angular|fesm2015)/,
    resolve(config.source_path) // or resolve(config.source_path, config.source_entry_path)
  )
)
environment.loaders.prepend('typescript', typescript)
environment.loaders.append("html", {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
      options: {
        minimize: true,
      },
    },
  ],
})
environment.loaders.append("import", {
  test: /[\/\\]@angular[\/\\].+\.js$/,
  parser: { system: true } 
})

module.exports = environment
