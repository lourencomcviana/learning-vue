module.exports = {
  pluginOptions: {
    quasar: {
      treeShake: true
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  transpileDependencies: [
    /[\\/]node_modules[\\/]quasar[\\/]/
  ]
}
