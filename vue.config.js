const path = require("path");

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/entry.scss";`,
      },
    },
  },
});
