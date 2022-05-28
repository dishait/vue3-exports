# vue3-exports

开箱即用的 `vite + vue3 + vitest + ts` 库模板，用来打包 `vue3` 的 `.vue` 组件与 `composition-api` 


<br />

## 特性 

### 开发时

- `typeScript`
- 构建工具 👉 `vite`
- 测试工具 👉 `vitest`
- 包管理工具 👉 `pnpm`
- 原子 `css` 引擎 👉 `unocss`
- `vue3`，支持 `sfc` 的 `setup` 语法糖


<br />

### 生产时

- 支持 `vue3` 的 `.vue` 组件
- 并行地打包 `js` 和打包类型声明
- 支持同时导出 `commonjs` 与 `esmodule` 两种规范 
- 支持导出 `.vue` 组件也支持的完全 `dts` 类型声明

<br />
<br />

## 动机

开发 `vue3` 相关的 `npm` 库时，可以直接用该模板进行快速开发，而不需要重新构建繁杂的开发环境。


<br />
<br />

## 使用

### 初始化

更改模板中的 `package.json`，`LICENSE` 和 `README.md` 为自己的信息 😜

#### 注意 

由于用到 `pnpm` 的 `workspace`，所以 `examples/vite/package.json` 也需要改 👇 

```diff
{
	...
	"devDependencies": {
-           "vue3-exports": "workspace:*",
+           "your-package-name": "workspace:*"
	}
    ...
}
```

<br />

### 命令

```shell
pnpm i # 安装依赖

pnpm dev # 开发

pnpm build # 打包

pnpm build-js # 仅打包 js

pnpm build-types # 仅打包类型

pnpm release # 发布

pnpm play # 启动 example

pnpm play:build # 打包 example

pnpm play:preview # 预览 example

pnpm test # 单元测试

pnpm test:ui # 单元测试(ui)

pnpm test:update # 单元测试(持续更新)
```

<br />

### 导出

在 `src/exports` 里导出即可

```ts
// 导出 composition-api
export { useInc } from './composables/inc'

// 导出 .vue 组件
export { default as Hello } from './components/Hello.vue'
```


<br />
<br />

## License

Made with [name](https://github.com/name)

Published under [MIT License](./LICENSE).