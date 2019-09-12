<template>
  <div
    class="timer justify-center items-center no-select"
    :class="value? 'cursor-none' : 'cursor-pointer'"
    @click.stop="activeFn"
    v-text="timerText"
  ></div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "Timer",
  props: {
    /**
     * 默认展示的文案
     */
    focus: {
      type: String,
      default: "获取验证码"
    },
    /**
     * 时间 s
     */
    time: {
      type: Number,
      default: 60
    },
    /**
     * 动态变化的文案
     */
    template: {
      type: String,
      default: "{{time}} S"
    },
    /**
     * 倒计时完毕后文案
     */
    blur: {
      type: String,
      default: "再次发送"
    },
    /**
     * 是否激活
     */
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: new Function(), // 计时器
      timerText: this.focus
    };
  },
  computed: {},
  watch: {
    value(n, o) {
      if (!n) {
        clearInterval(this.timer);
        this.timerText = this.focus;
      }
      return n && this.timerFn();
    }
  },
  methods: {
    activeFn() {
      return this.$emit("start", this.value);
    },
    timerFn() {
      let { template, blur } = this,
        tim = this.time;
      return (this.timer = setInterval(() => {
        if (tim > 0) {
          tim--;
          this.timerText = template.replace(/\{\{(\S*)\}\}/g, tim);
        } else {
          this.$emit("input", false);
          clearInterval(this.timer);
          return (this.timerText = blur);
        }
      }, 1000));
    }
  },
  destroyed() {
    return clearInterval(this.timer);
  }
};
</script>
<style scoped>
</style>