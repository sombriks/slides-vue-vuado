<template>
  <div>
    <h1>Quem sou eu?</h1>
    <div class="row">
      <div class="col-xs-6 col-sm-4">
        <img class="w" v-if="step >=2" src="../assets/picture_18.jpg"/>
      </div>
      <div class="col-xs-6 col-sm-4">
        <img class="w" v-if="step >=2" src="../assets/logo-ifce.png"/>
      </div>
      <div class="col-xs-6 col-sm-4">
        <img class="w" v-if="step >=2" src="../assets/techpar.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-whoami",
  props: ["step"],
  created() {
    this.$emit("upsteps", 5);
  },
};
</script>

<style scoped>
.w {
  width: 100%;
}
</style>
