<template>
  <div id="app">
    <VueVuado />
  </div>
</template>

<script>
import VueVuado from "./components/vue-vuado.vue";

export default {
  name: "app",
  components: {
    VueVuado,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
