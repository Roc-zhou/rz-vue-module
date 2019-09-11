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
    <h1>3、CountUp</h1>
    <div class="justify-start">
      <CountUp :endVal="2000" class="CountUp"></CountUp>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      active: false
    };
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
