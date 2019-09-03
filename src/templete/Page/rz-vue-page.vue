<template>
  <div class="paging">
    <ul class="mo-paging">
      <li
        :class="['paging-item', 'paging-item--prev', 'items-center', {'paging-item--disabled' : index === 1},'one']"
        @click.stop="prev"
      >上一页</li>
      <li
        :class="['paging-item', 'paging-item--first', 'items-center', {'paging-item--disabled' : index === 1},'two']"
        @click.stop="first"
      >首页</li>
      <li :class="['paging-item', 'items-center', 'paging-item--more']" v-if="showPrevMore">...</li>
      <li
        :class="['paging-item', 'items-center', {'paging-item--current' : index === pager}]"
        v-for="pager in pagers"
        @click.stop="go(pager)"
      >{{ pager }}</li>
      <li :class="['paging-item', 'items-center', 'paging-item--more']" v-if="showNextMore">...</li>
      <li
        :class="['paging-item', 'items-center', 'paging-item--last', {'paging-item--disabled' : index === pages},'two']"
        @click.stop="last"
      >尾页</li>
      <li
        :class="['paging-item', 'items-center', 'paging-item--next', {'paging-item--disabled' : index === pages},'one']"
        @click.stop="next"
      >下一页</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "rz-vue-page",
  props: {
    //页面中的可见页码，其他的以...替代, 必须是奇数
    perPages: {
      type: Number,
      default: 5
    },

    //当前页码
    pageIndex: {
      type: Number,
      default: 1
    },

    //每页显示条数
    pageSize: {
      type: Number,
      default: 10
    },

    //总记录数
    total: {
      type: Number,
      default: 20
    }
  },
  methods: {
    prev() {
      if (this.index > 1) {
        this.go(this.index - 1);
        this.setScrollTop(0);
      }
    },
    next() {
      if (this.index < this.pages) {
        this.go(this.index + 1);
        this.setScrollTop(0);
      }
    },
    first() {
      if (this.index !== 1) {
        this.go(1);
        this.setScrollTop(0);
      }
    },
    last() {
      if (this.index != this.pages) {
        this.go(this.pages);
        this.setScrollTop(0);
      }
    },
    go(page) {
      if (this.index !== page) {
        this.index = page;
        //父组件通过change方法来接受当前的页码
        this.$emit("change", this.index);
        this.setScrollTop(0);
      }
    },
    /**
     *设置scrollTop的值，兼容所有浏览器
     */

    setScrollTop(scroll_top) {
      document.documentElement.scrollTop = scroll_top;
      window.pageYOffset = scroll_top;
      document.body.scrollTop = scroll_top;
    },
    backTop() {
      this.setScrollTop(0);
    }
  },
  computed: {
    //计算总页码
    pages() {
      return Math.ceil(this.size / this.limit);
    },

    //计算页码，当count等变化时自动计算
    pagers() {
      const array = [];
      const perPages = this.perPages;
      const pageCount = this.pages;
      let current = this.index;
      const _offset = (perPages - 1) / 2;
      const offset = {
        start: current - _offset,
        end: current + _offset
      };
      //-1, 3
      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start);
        offset.start = 1;
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount);
        offset.end = pageCount;
      }
      if (offset.start < 1) offset.start = 1;
      this.showPrevMore = offset.start > 1;
      this.showNextMore = offset.end < pageCount;
      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i);
      }
      return array;
    }
  },
  data() {
    return {
      index: this.pageIndex, //当前页码
      limit: this.pageSize, //每页显示条数
      size: this.total || 1, //总记录数
      showPrevMore: false,
      showNextMore: false
    };
  },
  watch: {
    pageIndex(val) {
      this.index = val || 1;
    },
    pageSize(val) {
      this.limit = val || 10;
    },
    total(val) {
      this.size = val || 1;
    }
  }
};
</script>
<style scoped>
.items-center {
  display: flex;
  display: -webkit-flex;
  -webkit-align-items: center;
  align-items: center;
}
@media screen and (max-width: 755px) {
  .mo-paging {
    display: inline-block;
    padding: 0;
    /* margin: 2em 0; */
    font-size: 0;
    list-style: none;
    user-select: none;
  }
  .paging-item {
    display: inline;
    font-size: 0.390625rem /* 25/64 */;
    position: relative;
    padding: 0.15625rem /* 10/64 */ 0.234375rem /* 15/64 */;
    text-decoration: none;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-left: -1px;
    cursor: pointer;
  }
  .paging-item:first-child {
    margin-left: 0;
  }
  .paging-item--disabled,
  .paging-item--more {
    background-color: #fff;
    color: #505050;
  }
  .paging-item--disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }
  .paging-item--more,
  .paging-item--current {
    cursor: default;
  }
  /* 选中 */
  .paging-item--current {
    background-color: #f2f2f2;
    position: relative;
    z-index: 1;
    border-color: #ccc;
  }
}

@media screen and (min-width: 755px) {
  .mo-paging {
    display: inline-block;
    padding: 0;
    font-size: 0;
    list-style: none;
    user-select: none;
  }
  .paging-item {
    display: inline-block;
    position: relative;
    width: 32px;
    height: 32px;
    text-decoration: none;
    border: 1px solid #e4e4e4;
    background-color: #fff;
    border-radius: 4px;
    margin-left: -1px;
    cursor: pointer;
    font-size: 14px;
    color: #333333;
    text-align: center;
    line-height: 32px;
    margin: 0 5px;
  }
  .paging-item:first-child {
    margin-left: 0;
  }
  .paging-item:hover {
    background-color: #333;
    color: #fff;
  }
  .paging-item--disabled,
  .paging-item--more {
    background-color: #fff;
    color: #505050;
  }
  .paging-item--disabled {
    cursor: not-allowed;
    opacity: 0.75;
  }
  .paging-item--more,
  .paging-item--current {
    cursor: default;
  }
  /* 选中 */
  .paging-item--current {
    background-color: #333;
    color: #fff;
    position: relative;
  }
  .one {
    width: 75px;
  }
  .two {
    width: 60px;
  }
}
</style>