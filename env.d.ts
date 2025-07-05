/// <reference types="vite/client" />
//不加报错在main.ts中报出找不到模块“./App.vue”或其相应的类型声明ts(2307)。
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent
}
