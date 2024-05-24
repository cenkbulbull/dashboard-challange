const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import "@/assets/scss/main.scss";
                @import "@/assets/scss/base/variables";
                @import "@/assets/scss/base/typography";
                @import "@/assets/scss/base/mixins";
            `,
      },
    },
  },
  transpileDependencies: true,
});
