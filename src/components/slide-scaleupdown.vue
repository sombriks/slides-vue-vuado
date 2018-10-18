<template>
  <div>
    <h1>Escalando</h1>
  </div>
</template>

<script>
export default {
  name: "slide-scaleupdown",
  props: ["step"],
  created() {
    this.$emit("upsteps", 1);
  },
};
</script>

<style>
</style>
