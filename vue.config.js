const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  //不要map映射文件
  productionSourceMap: false,
  transpileDependencies: true,
  //关闭eslint
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
});
