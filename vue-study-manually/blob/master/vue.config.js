module.export = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}