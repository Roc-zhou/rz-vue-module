# 基于 vue 的一个分页组件插件
先上图

![image.png](https://i.loli.net/2019/09/02/A7vo2caqxsLUZ58.png)

### 安装
```sh
npm install --save rz-vue-module or cnpm install --save rz-vue-module
yarn add rz-vue-module
```

### 使用 main.js
```
全局注册
import Page from 'rz-vue-module'
Vue.use(Page)
```
### app.vue
```
直接使用
<Page :page-index="2" :total="20" :page-size="8" @change="changeone"></Page>
```