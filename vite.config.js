import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import mozaicSassConfig from '@mozaic-ds/css-dev-tools/sassConfig';
import mozaicPluginList from '@mozaic-ds/css-dev-tools/postcssPluginConfig';
import { includePaths } from '@mozaic-ds/css-dev-tools/sassConfig';

const filteredMozaicPluginList = mozaicPluginList.filter(
  ({ postcssPlugin }) => postcssPlugin !== 'stylelint'
);

console.log('filteredMozaicPluginList', filteredMozaicPluginList);
console.log('includePaths', includePaths);

export default defineConfig({
  filenameHashing: false,
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "legacy",
        includePaths,
      },
    },
    postcss: {
      postcssOptions: {
        plugins: filteredMozaicPluginList,
      },
    },
    loaderOptions: {
      sass: {
        sassOptions: mozaicSassConfig,
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
