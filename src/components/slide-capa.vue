<template>
  <div>
    <h1>Vue Vuado</h1>
    <img v-if="step >=2" src="../assets/logo.png"/>
    <h2  v-if="step ==3">O moderno e eficiente também é simples e prático</h2>
  </div>
</template>

<script>
export default {
  name: "slide-capa",
  props: ["step"],
  created() {
    this.$emit("upsteps", 3);
  },
};
</script>
<style>
.s {
  text-align: start;
}
</style>
