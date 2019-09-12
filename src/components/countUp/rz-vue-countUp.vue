<template>
  <div class="CountUp justify-center">
    <span :id="counterId"></span>
  </div>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  name: "CountUp",
  props: {
    // 从 0 开始
    startVal: {
      type: Number,
      default: 0
    },
    // 小数位数
    decimalPlaces: {
      type: Number,
      default: 0
    },
    // 持续几秒
    duration: {
      type: Number,
      default: 2
    },
    // example: 1,000 vs 1000 (true)
    useGrouping: {
      type: Boolean,
      default: true
    },
    // 缓解动画
    useEasing: {
      type: Boolean,
      default: true
    },
    // grouping separator (',')
    separator: {
      type: String,
      default: ","
    },
    // decimal ('.')
    decimal: {
      type: String,
      default: "."
    },
    // 前缀
    prefix: {
      type: String,
      default: ""
    },
    // 后缀
    suffix: {
      type: String,
      default: ""
    },
    // 延迟几秒加载
    delay: {
      type: Number,
      default: 0
    },
    // 结束值，即动画结束后显示的数值
    endVal: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      counter: null,
      options: {
        startVal: this.startVal,
        decimalPlaces: this.decimalPlaces,
        duration: this.duration,
        useGrouping: this.useGrouping,
        useEasing: this.useEasing,
        separator: this.separator,
        decimal: this.decimal,
        prefix: this.prefix,
        suffix: this.suffix
      }
    };
  },
  computed: {
    counterId() {
      return `count-to-${this._uid}`;
    }
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(this.counterId, this.endVal, this.options);
      setTimeout(() => {
        if (!this.counter.error) this.counter.start();
      }, this.delay);
    });
  },
  watch: {
    endVal(n, o) {
      this.counter.update(n);
    }
  }
};
</script>
