<template>
  <div id="app">
    <h1>rz-vue-page</h1>
    <Page :page-index="2" :total="20" :page-size="8" @change="changeone"></Page>
  </div>
</template>

<script>
// import { Page } from "./index";
export default {
  name: "App",
  components: {
    // Page
  },
  methods: {
    changeone() {}
  }
};
</script>

<style>
</style>
