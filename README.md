# 基于 vue 的一个分页组件插件
> [demo](https://roc-zhou.github.io/rz-vue-module/)

[TOC]

## 安装
```sh
npm install --save rz-vue-module or cnpm install --save rz-vue-module
yarn add rz-vue-module
```

## 使用 main.js
```
全局注册
import RZ from 'rz-vue-module'
Vue.use(RZ)
```

### Page 分页组件
先上图

![image.png](https://i.loli.net/2019/09/02/A7vo2caqxsLUZ58.png)
```
直接使用
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
```
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

#### 使用
```
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