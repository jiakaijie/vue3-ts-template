# vue3-ts-template

基于 @vue/cli typescript 项目模版 （vue create vue3-ts-template）创建

## 开发环境依赖

node: v16.16.0

vue: ^3.0.0

## Scripts

### `npm install`

装包

### `npm run dev`

本地启动

[http://localhost:8080]

### `npm run lint`

Lints and fixes files

### `npm run build`

打包

## 上线环境域名

测试：https://test-xxx.com

灰度：https://gray-xxx.com

线上：https://xxx.com

## 相关配置

### postcss
vue-cli 已经安装 postcss

只需要配置 postcss.config.js 就 ok

比如：
npm i postcss-px-to-viewport
然后使用 ok

### 调用不同环境接口方式

判断当前域名，根据页面域名环境切换接口环境

## 埋点

项目：
账号：
密码：
地址：

## 代码结构

├── public                      // 打包静态模版
│   ├── favicon.ico             // favicon图标
│   ├── index.html              // html模板
├── src                         // 源代码
│   ├── api                     // 所有请求
│   ├── assets                  // 主题、字体、样式等静态资源
│       ├── css                 // css
│       ├── font                // font
│       ├── img                 // img
│       ├── 其他                 // 其他
│   ├── components              // 全局公用组件
│   ├── config                  // 全局配置
│   ├── router                  // 路由配置
│   ├── store                   // 全局store
│   ├── utils                   // 全局公用方法
│   │   ├── http.ts             // 请求方法
│   │   ├── time.ts             // 时间处理
│   ├── views                   // 页面
│   ├── App.vue                 // 根入口组件
│   ├── main.ts                 // 打包入口文件
│   └── shims-vue.d.ts          // vue ts
├── static                      // 第三方不打包资源
│   └── Tinymce                 // 富文本
├── .browserslistrc             // 浏览器支持配置
├── .eslintrc.js                // eslint配置
├── .gitignore                  // git忽略项目
├── babel.config.js             // babel-loader配置
├── package-lock.json           // package-lock.json
├── package.json                // package.json
├── postcss.config.js           // postcss配置
├── README.md                   // README.md
├── tsconfig.json               // ts配置
└── vue.config.js               // vue webpack 打包配置
