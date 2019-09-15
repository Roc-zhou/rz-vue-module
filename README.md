# 基于 vue 的一个分页组件插件
> [demo](https://roc-zhou.github.io/rz-vue-module/)

> 适用于个人项目 或 需求不是特别复杂项目。

[TOC]

## test
```sh
git clone https://github.com/Roc-zhou/rz-vue-module.git

cd rz-vue-module

npm or yarn install

npm run dev

http://localhost:8080/
```



## 安装
```sh
npm install --save rz-vue-module or cnpm install --save rz-vue-module
yarn add rz-vue-module
```

## 使用 main.js (全局注册)
```js
// 全局注册
import RZ from 'rz-vue-module'
Vue.use(RZ)
```
## 按需引入
```js
// HelloWorld.vue
import Page from 'rz-vue-module/lib/Page'

components: {
  Page
}
```

### Page 分页组件
先上图

![image.png](https://i.loli.net/2019/09/02/A7vo2caqxsLUZ58.png)
```js
// 直接使用
<Page :page-index="2" :total="20" :page-size="8" @change="changeone"></Page>
```
#### props
|   属性    |                     说明                      |  类型  | 默认值 |
| :-------: | :-------------------------------------------: | :----: | :----: |
| perPages  | 页面中的可见页码，其他的以...替代, 必须是奇数 | Number |   5    |
| pageIndex |                   当前页码                    | Number |   1    |
| pageSize  |                 每页显示条数                  | Number |   10   |
|   total   |                     总数                      | Number |   20   |

#### events
| 事件名 |   说明   |  返回值  |
| :----: | :------: | :------: |
| change | 切换页码 | 当前页码 |

### Timer 倒计时组件

#### 使用
```js
<Timer class="app-timer" @start="getCode" v-model="active"></Timer>
```

#### props
|   属性   |       说明       |  类型   |   默认值   |
| :------: | :--------------: | :-----: | :--------: |
|  focus   |  默认展示的文案  | String  | 获取验证码 |
|   time   |       时间       | Number  |     60     |
| template |  动态变化的文案  | String  | {{time}} S |
|   blur   | 倒计时完毕后文案 | String  |  再次发送  |
|  value   |     是否激活     | Boolean |   false    |

#### events
| 事件名 |   说明   |    返回值     |
| :----: | :------: | :-----------: |
| start  | 点击开始 | fasle or true |

### CountUp 数字动画组件

![GIF.gif](https://i.loli.net/2019/09/12/n8Fga9L4AkVS73Q.gif)

#### 使用
```js
<CountUp :endVal="num" class="CountUp"></CountUp> // 样式自己定义
```
#### props

|     属性      |              说明              |  类型   | 默认值 |
| :-----------: | :----------------------------: | :-----: | :----: |
|   startVal    |          从 多少 开始          | Number  |   0    |
| decimalPlaces |            小数位数            | Number  |   0    |
|   duration    |          动画持续时间          | Number  |   2    |
|  useGrouping  | example: 1,000 vs 1000 (true)  | Boolean |  true  |
|   useEasing   |     ease animation (true)      | Boolean |  true  |
|   separator   |    grouping separator (',')    | String  |   ，   |
|    decimal    |         decimal ('.')          | String  |   .    |
|    prefix     |              前缀              | String  |   -    |
|    suffix     |              后缀              | String  |   -    |
|     delay     |          延迟几秒加载          | Number  |   0    |
|    endVal     | 结束值，即动画结束后显示的数值 | Number  | 必传！ |

> 更多选项 [demo](https://inorganik.github.io/countUp.js/)

### QrCode 二维码
> 原组件 vue-qr  github  https://github.com/Binaryify/vue-qr  更多详细 请访问 [vue-qr](https://github.com/Binaryify/vue-qr)
```js
<qr-code :text="'https://roc-zhou.github.io/rz-vue-module/'"></qr-code>
```
#### props 
|     属性      |              说明              |  类型   | 默认值 |
| :-----------: | :----------------------------: | :-----: | :----: |
|   text    |          欲编码的内容          | String  |   ''    |
| correctLevel |            容错级别 0-3            | Number  |   0    |
|   size    |          尺寸, 长宽一致, 包含外边距 默认200          | Number  |   200    |
|  margin  | 二维码图像的外边距, 默认 20px  | Number |  20  |
|   bgSrc   |    欲嵌入的背景图地址      | String |  ''  |
|   gifBgSrc   |    欲嵌入的背景图 gif 地址,设置后普通的背景图将失效。设置此选项会影响性能    | String  |  ''   |
|    backgroundColor    |         背景色          | String  |   '#fff'   |
|    logoSrc     |     嵌入至二维码中心的 LOGO 地址     | String  |   ''    |
|    logoScale     |              用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2              | Number  |   0.2   |
|     logoMargin     |          LOGO 标识周围的空白边框, 默认为0          | Number  |   0    |
|    logoBackgroundColor     | Logo 背景色,需要设置 logo margin | String  | '' |
|    logoCornerRadius     | LOGO 标识及其边框的圆角半径, 默认为0 | Number  | 0 |
|    whiteMargin     | 若设为 true, 背景图外将绘制白色边框 | Boolean  | true |

#### events
| 事件名 |   说明   |    返回值     |
| :----: | :------: | :-----------: |
| change  | 返回url | url |
