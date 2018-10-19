<template>
  <div>
    <h1>História</h1>
    <p v-if="step > 1 && step < 6">Pré 94 era - BBS, emoticon com letras, terminal</p>
    <h2 v-if="step > 2 && step < 6">Pré-cambriano da internet</h2>
    <p v-if="step > 3 && step < 6">1994 a 2003 - perl, ASP, PHP, internet explorer</p>
    <h2 v-if="step > 4 && step < 6">Jurássico da internet</h2>
    <div class="row">
      <div class="col-xs-6">
        <img v-if="step >= 6 && step < 12" class="w" src="../assets/brendan-eich.jpg"/>
        <br/>
        <small v-if="step >= 7 && step < 12"><a href="https://twitter.com/BrendanEich" target="gordim">Brendan Eich</a></small>
        <div v-if="step >= 8 && step < 12">Engenheiro Netscape</div>
        <div v-if="step >= 9 && step < 12"><i>15 dias pra integrar a JVM da SUN (i.e. Java) no <b>Netscape Navigator</b></i></div>
      </div>
      <div class="col-xs-6">
         <div v-if="step >= 10 && step < 12">Pariu o Javascript</div>
         <div v-if="step >= 11 && step < 12" style="color:gold;">
           Renascença da internet
         </div>
      </div>
    </div>
    <div class="row">
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-historia",
  props: ["step"],
  created() {
    this.$emit("upsteps", 15);
  },
};
</script>

<style scoped>
.w {
  width: 50%;
}
</style>
