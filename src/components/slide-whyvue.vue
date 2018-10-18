<template>
  <div>
    <h1>Razões para adotar vue</h1>
  </div>
</template>

<script>
export default {
  name: "slide-whyvue",
  props: ["step"],
  created() {
    this.$emit("upsteps", 1);
  },
};
</script>

<style>
</style>
