<template>
  <div>
    <h1 v-if="step == 1">Perguntas?</h1>
    <h1 v-if="step == 2">Obrigado!</h1>
    <p v-if="step > 2">Estes slides foram feitos em vue usando o <a href="https://zulko.github.io/eaglejs-demo/#/" target="eagle">Ealge.js</a></p>
    <p v-if="step > 2">Os fontes desta apresentação se encontram <a href="https://github.com/sombriks/slides-vue-vuado" taget="aqui">aqui.</a></p>
  </div>
</template>

<script>
export default {
  name: "slide-questions",
  props: ["step"],
  created() {
    this.$emit("upsteps", 3);
  },
};
</script>

<style>
</style>
