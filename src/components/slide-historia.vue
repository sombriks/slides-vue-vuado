<template>
  <div>
    <h1>História</h1>
  </div>
</template>

<script>
export default {
  name: "slide-historia",
  props: ["step"],
  created() {
    this.$emit("upsteps", 1);
  },
};
</script>

<style>
</style>
