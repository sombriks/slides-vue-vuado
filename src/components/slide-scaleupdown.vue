<template>
  <div>
    <h1>Escalando para cima ou para baixo</h1>
    <p v-if="step > 1 && step < 6">É importante medir quanto esforço é necessário para resolver um problema</p>
    <div class="row">
      <div v-if="step > 2" class="col-xs-3 col-xs-offset-1">
        <img class="w" src="../assets/rockman.gif"/>
      </div>
      <div v-if="step > 3" class="col-xs-3">
        <img class="w" src="../assets/mega-man-x.gif"/>
      </div>
      <div v-if="step > 4" class="col-xs-3">
        <img class="w" src="../assets/mega-man-x-full-armor.gif"/>
      </div>
    </div>
    <div class="row"> 
      <div v-if="step > 5" class="col-xs-3 col-xs-offset-1">
        <ul>
          <li><a href="https://br.vuejs.org/v2/guide/installation.html#CDN" target="cdn">CDN</a></li>
          <li>Tag de script paz e amor</li>
        </ul>
      </div>
      <div v-if="step > 6" class="col-xs-3">
        <ul>
          <li><a href="https://br.vuejs.org/v2/guide/installation.html#NPM" target="npm">npm init -y ; npm linstall vue</a></li>
          <li><a href="http://browserify.org/" target="browserify">browserify</a></li> 
          <li><a href="https://webpack.js.org/" target="webpack">webpack</a></li> 
          <li><a href="https://parceljs.org/" target="parcel">parcel</a></li> 
          <li><a href="https://poi.js.org/" target="poi">poi</a></li>
          <li><a href="https://rollupjs.org/" target="rollup">rollup</a></li>
        </ul>
      </div>
      <div v-if="step > 7" class="col-xs-3">
        <ul>
           <li>vue-cli (<i>que te dá um webpack pronto para usar</i>)</li>
           <li><a href="https://vuejs.org/v2/guide/single-file-components.html" target="sfc">vue SFC</a> (arquivos '.vue')</li>
           <li><a href="https://mochajs.org/" target="mocha">Mocha</a> para <a href="https://br.vuejs.org/v2/guide/unit-testing.html" target="testes">testes unitários</a></li>
           <li><a href="https://router.vuejs.org/" target="router">Vue-Router</a></li>
           <li><a href="https://vuex.vuejs.org/guide/ " target="vuex">Vuex</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-scaleupdown",
  props: ["step"],
  created() {
    this.$emit("upsteps", 20);
  },
};
</script>

<style scoped>
.w {
  width: 50%;
}
li {
  text-align: start;
}
</style>
