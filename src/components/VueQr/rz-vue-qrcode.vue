<template>
  <div class="Qrcode justify-center">
    <vue-qr
      :text="text"
      :correctLevel="correctLevel"
      :size="size"
      :margin="margin"
      :bgSrc="bgSrc"
      :gifBgSrc="gifBgSrc"
      :backgroundColor="backgroundColor"
      :logoSrc="logoSrc"
      :logoScale="logoScale"
      :logoMargin="logoMargin"
      :logoBackgroundColor="logoBackgroundColor"
      :logoCornerRadius="logoCornerRadius"
      :whiteMargin="whiteMargin"
      ::callback="test"
    ></vue-qr>
  </div>
</template>

<script>
import VueQr from "vue-qr";
import { type } from "os";
export default {
  name: "QrCode",
  props: {
    // 欲编码的内容
    text: {
      type: String,
      required: true,
      default: ""
    },
    //容错级别 0-3
    correctLevel: {
      type: Number,
      default: 0
    },
    //尺寸, 长宽一致, 包含外边距 默认200
    size: {
      type: Number,
      default: 200
    },
    //二维码图像的外边距, 默认 20px
    margin: {
      type: Number,
      default: 20
    },
    //  欲嵌入的背景图地址
    bgSrc: {
      type: String,
      default: ""
    },
    //  欲嵌入的背景图 gif 地址,设置后普通的背景图将失效。设置此选项会影响性能
    gifBgSrc: {
      type: String,
      default: ""
    },
    // 背景色
    backgroundColor: {
      type: String,
      default: "#FFF"
    },
    // 嵌入至二维码中心的 LOGO 地址
    logoSrc: {
      type: String,
      default: ""
    },
    // 用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 logoScale*(size-2*margin), 默认 0.2
    logoScale: {
      type: Number,
      default: 0.2
    },
    //  LOGO 标识周围的空白边框, 默认为0
    logoMargin: {
      type: Number,
      default: 0
    },
    //Logo 背景色,需要设置 logo margin
    logoBackgroundColor: {
      type: String,
      default: ""
    },
    //LOGO 标识及其边框的圆角半径, 默认为0
    logoCornerRadius: {
      type: Number,
      default: 0
    },
    //若设为 true, 背景图外将绘制白色边框
    whiteMargin: {
      type: Boolean,
      default: true
    }
  },
  components: { VueQr },
  data() {
    return {};
  },
  methods: {
    test(dataUrl, id) {
      this.$emit("change", dataUrl);
    }
  }
};
</script>
