<template>
  <div>
    <h1>História</h1>
    <p v-if="step > 1 && step < 6">Pré 94 era - BBS, emoticon com letras, terminal</p>
    <h2 v-if="step > 2 && step < 6">Pré-cambriano da internet</h2>
    <p v-if="step > 3 && step < 6">1994 a 2003 - perl, ASP, PHP, internet explorer</p>
    <h2 v-if="step > 4 && step < 6">Jurássico da internet</h2>
    <div class="row">
      <div class="col-xs-5 col-xs-offset-1">
        <h2 v-if="step >= 6 && step < 12">4 de dezembro de 1995</h2>
        <small v-if="step >= 7 && step < 12"><a href="https://twitter.com/BrendanEich" target="gordim">Brendan Eich</a></small>
        <div v-if="step >= 8 && step < 12">Engenheiro Netscape</div>
        <div v-if="step >= 9 && step < 12"><i>15 dias pra integrar a JVM da SUN (i.e. Java) no <b>Netscape Navigator</b></i></div>
      </div>
      <div class="col-xs-5">
         <div v-if="step >= 10 && step < 12">Pariu o Javascript</div>
         <div v-if="step >= 11 && step < 12">
          <i style="color:green;">Infância da internet, script pra reiniciar o windows 98 dos outros remotamente, entre outras falhas de segurança.</i>
         </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-5 col-xs-offset-1">
        <h2 v-if="step >= 12 && step < 19">Março de 1999</h2>
        <div v-if="step >= 13 && step < 19">Microsoft inventa o <b>IXMLHTTPRequest</b></div>
        <h2 v-if="step >= 14 && step < 19">Dezembro de 2000</h2>
        <div v-if="step >= 15 && step < 19">Mozilla adiciona o <b>nsIXMLHttpRequest</b> ao Gecko</div>
      </div>
      <div class="col-xs-5">
        <h2 v-if="step >= 16 && step < 19">5 de Abril de 2006</h2>
        <div v-if="step >= 17 && step < 19"> A <a href="https://www.w3.org/" target="w3c">W3C</a> publica o working draft do <b>XMLHttpRequest</b></div>
        <div v-if="step >= 18 && step < 19">
          <hr/>
          <img src="../assets/ajax.png" class="w"/>
        </div>
      </div>
    </div>
    <img v-if="step >= 19 && step < 21" src="../assets/jquery.png"/>
    <img v-if="step >= 20 && step < 21" src="../assets/dwr.gif"/>
    <!-- Estes dois foram os queridinhos de muita gente por muito tempo -->
    <h2 v-if="step >= 21 && step < 24">27 de maio de 2009</h2>
    <img v-if="step >= 22 && step < 24" src="../assets/nodejs.png"/>
    <small v-if="step >= 23 && step < 24">O <a href="https://www.npmjs.com/" target="npm">NPM</a> veio um ano depois</small>
    <h2 v-if="step >= 24 && step < 27">20 de outubro de 2010</h2>
    <img v-if="step == 25" class="ws" src="../assets/angular-js.png"/>
    <p v-if="step == 26">O <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel" target="mvvw">MVVW</a> chega pra todo mundo</p>
    <h2 v-if="step >= 27 && step < 29">Fevereiro de 2014</h2>
    <img class="ws" v-if="step >= 28" src="../assets/logo.png"/>
    <p v-if="step >= 29" style="color:gold;">Reatividade pra todo mundo</p>
  </div>
</template>

<script>
export default {
  name: "slide-historia",
  props: ["step"],
  created() {
    this.$emit("upsteps", 29);
  },
};
</script>

<style scoped>
.w {
  width: 50%;
}
.ws {
  width: 30%;
}
</style>
