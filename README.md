# 基于 vue 的一个分页组件插件
> [demo](https://roc-zhou.github.io/rz-vue-module/)

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
### props
|   属性    |                     说明                      |  类型  | 默认值 |
| :-------: | :-------------------------------------------: | :----: | :----: |
| perPages  | 页面中的可见页码，其他的以...替代, 必须是奇数 | Number |   5    |
| pageIndex |                   当前页码                    | Number |   1    |
| pageSize  |                 每页显示条数                  | Number |   10   |
|   total   |                     总数                      | Number |   20   |

### events
| 事件名 |   说明   |  返回值  |
| :----: | :------: | :------: |
| change | 切换页码 | 当前页码 |
