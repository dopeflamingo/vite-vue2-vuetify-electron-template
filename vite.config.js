import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import ViteComponents from "vite-plugin-components";

const path = require("path");

// module.exports = {
//   plugins: [createVuePlugin(/*options*/)],
// }

export default defineConfig({
  plugins: [
    createVuePlugin(),
    ViteComponents({
      customComponentResolvers: [
        (name) => {
          // where `name` is always CapitalCase
          if (name.startsWith("V"))
            return { importName: name, path: "vuetify/lib" };
        },
      ],
    }),
  ],
  // transpileDependencies: ["vuetify"],
  // server: {
  //   port: 8080,
  // },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  base: "./",
  build: {
    outDir: path.join(__dirname, "dist"),
    emptyOutDir: true,
    minify: false,
    commonjsOptions: {},
    assetsDir: "",
    sourcemap: true,
  },
});