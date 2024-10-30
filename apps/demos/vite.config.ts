import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("web-") || tag.includes("stencil-"),
        },
      },
    }),
    AutoImport({
      dts: "src/declarations/auto-imports.d.ts",
      imports: [
        "vue",
        "vue-router",
        {
          from: "vue-router",
          imports: [
            "createRouter",
            "createWebHistory",
          ],
        },
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    Components({
      dts: "src/declarations/components.d.ts",
      resolvers: [
        IconsResolver({
          prefix: false,
        }),
      ],
    }),
    vueDevTools(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
