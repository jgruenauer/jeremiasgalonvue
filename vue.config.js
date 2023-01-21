const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('markdown')
        .test(/\.md$/)
        .use('vue-loader')
          .loader('vue-loader')
          .end()
        .use('markdown-to-vue-loader')
          .loader('markdown-to-vue-loader')
          .options({
            // ...
          })
          .end();
  },
};
