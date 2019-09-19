<template>
  <div id="app">
    <h1>1、Page 分页组件</h1>
    <div class="justify-start">
      <Page :page-index="2" :total="20" :page-size="8" @change="changeone"></Page>
    </div>
    <br />
    <hr />
    <h1>2、Timer 获取验证码倒计时组件（自己写样式）</h1>
    <div class="justify-start">
      <Timer class="app-timer" @start="getCode" v-model="active"></Timer>
    </div>
    <h1>3、CountUp 数字动画</h1>
    <div class="justify-start items-center">
      <CountUp :endVal="40000" class="CountUp" :duration="5" style="margin-right:20px;"></CountUp>
      <CountUp
        :endVal="2000"
        class="CountUp"
        :duration="5"
        :prefix="'￥'"
        style="margin-right:20px;"
      ></CountUp>
      <CountUp :endVal="1000000" class="CountUp" :duration="5" :suffix="'元'"></CountUp>
    </div>
    <h1>4、QrCode 二维码</h1>
    <div class="justify-start items-center">
      <RzCode :text="'QrCode rz-vue-module'"></RzCode>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      active: false,
      num: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.num = 200000;
    }, 2000);
  },
  methods: {
    changeone(index) {
      alert(`当前页码是：${index}`);
    },
    getCode(e) {
      this.active = true;
      setTimeout(() => {
        this.active = false;
      }, 5000);
    }
  }
};
</script>

<style>
#app {
  padding: 0 50px;
}
.app-timer {
  width: 100px;
  height: 40px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
}
.CountUp {
  color: red;
  font-size: 30px;
}
</style>
