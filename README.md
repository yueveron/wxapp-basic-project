# wxapp-basic-project

### 项目简介

本项目的开发环境基于：Vscode + 小程序编辑器。其中 Vscode 用于代码编写，小程序编辑器用于预览及发布编译。

在 `src` 文件目录内，已经初始创建了基本文件目录结构，该结构已具有一定规范性。

```
├─src
|  ├─app.js
|  ├─app.json
|  ├─app.wxss
|  ├─sitemap.json
|  ├─utils             // 工具库
|  |   └util.js
|  ├─style             // 供 import 的 style 文件
|  ├─pages             // pages 
|  |   ├─newpage
|  |   |    ├─newpage.js
|  |   |    ├─newpage.json
|  |   |    ├─newpage.wxml
|  |   |    └newpage.wxss
|  |   ├─logs
|  |   |  ├─logs.js
|  |   |  ├─logs.json
|  |   |  ├─logs.wxml
|  |   |  └logs.wxss
|  |   ├─index
|  |   |   ├─index.js
|  |   |   ├─index.json
|  |   |   ├─index.wxml
|  |   |   └index.wxss
|  ├─libs             // 外部库
|  ├─images           // 图片
|  |   ├─icon_home.png
|  |   ├─icon_home_selected.png
|  |   ├─icon_user.png
|  |   └icon_user_selected.png
|  ├─components      // 组件
|        ├─child
|            ├─child.js
|            ├─child.json
|            ├─child.wxml
|            └child.wxss
├─.editorconfig
├─.eslintrc.js
├─package.json
├─project.config.json  // appid-需修改
├─README.md

```


---

### 开发环境配置
#### 一. VScode : ESLint 配置
#####  1. 安装 ESLint 扩展 
VSCode 扩展面板并搜索 ESLint 扩展

##### 2. 安装 ESLint 依赖

```
npm install -g eslint
```

##### 3. 创建 .eslintrc.js
.eslintrc.js 已创建，可根据须有扩展。


#### 二. Vscode : 编写微信小程序代码
##### 1. Vscode 扩展 - 微信小程序开发助手
https://marketplace.visualstudio.com/items?itemName=overtrue.miniapp-helper