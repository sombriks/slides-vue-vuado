<template>
  <div>
    <h1 v-if="step==1">Perguntas?</h1>
    <h1 v-if="step==2">Obrigado!</h1>
  </div>
</template>

<script>
export default {
  name: "slide-questions",
  props: ["step"],
  created() {
    this.$emit("upsteps", 2);
  },
};
</script>

<style>
</style>
