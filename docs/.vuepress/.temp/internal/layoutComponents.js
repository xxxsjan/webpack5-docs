import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/HEELOWORLD/front-end/my-git/webpack5-docs/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/HEELOWORLD/front-end/my-git/webpack5-docs/webpack_docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
