<template>
  <div>
    <h1>Perguntas?</h1>
  </div>
</template>

<script>
export default {
  name: "slide-questions",
  props: ["step"],
  created() {
    this.$emit("upsteps", 1);
  },
};
</script>

<style>
</style>
