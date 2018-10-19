<template>
  <div>
    <h1>Razões para adotar vue</h1>
    <div class="row">
      <div class="col-xs-11 col-sx-offset-1">
        <ul>
          <li v-if="step > 1 && step < 8"><b><a href="https://vuejs.org/" target="videozim">Progressivo</a></b><br/>
          <span>É possível adotar vue aos poucos</span></li>
          <li v-if="step > 2"><b><a href="https://cdn.rawgit.com/krausest/js-framework-benchmark/ad20ef6ea5cd0aacc372362b1385ca0529c1c213/webdriver-java/chart.html" target="vuebench">Excelente performance</a></b><br/>
          <span>Reatividade no ViewModel mandando seu alô</span></li>
          <li v-if="step > 3"><b><a href="https://github.com/vuejs/roadmap" target="road">Roadmap de evolução claro</a></b><br/>
          <span>O que você aprender não se perderá na próxima versão</span></li>
          <li v-if="step > 4"><b><a href="https://github.com/vuejs/awesome-vue" target="av">Ecossistema rico e crescente</a></b><br/>
          <span>Muita opção na feira pra freguesa escolher</span></li>
          <li v-if="step > 5"><b><a href="https://vuejs.org/v2/guide/team.html" target="av">Comunidade vibrante e amigável</a></b><br/>
            <span>
              <a target="t1" href="https://twitter.com/youyuxi">Evan You</a>, 
              <a target="t2" href="https://twitter.com/sarah_edo">Sarah Drasner</a>, 
              <a target="t3" href="https://twitter.com/_egoistlily">EGOIST</a> entre outros.   
            </span>
            <br/>
            <div v-if="step > 6">
              Ah, e além deles pra seguir no twitter, você ainda tem 
              <a target="t4" href="https://gitter.im/vuejs/vue">gitter</a>, 
              <a target="t5" href="https://forum.vuejs.org/">forum</a> 
              e <a target="t6" href="https://vue-land.js.org/">discord</a>!
            </div>
          </li>
          <li v-if="step > 7"><b><a target="" href=""></a></b><br/>
          <span></span></li>
          <li v-if="step > 8"><b><a href="https://br.vuejs.org/v2/guide/instance.html#Diagrama-do-Ciclo-de-Vida" target="comp">Baseado em componentes, que é o certo</a></b><br/>
          <span>Os pais falam com os filhos através do repasse de propriedades</span></li>
          <li v-if="step > 9"><b><a target="" href=""></a></b><br/>
          <span></span></li>
          <li v-if="step > 10"><b><a target="" href=""></a></b><br/>
          <span></span></li>
          <li v-if="step > 11"><b><a target="" href=""></a></b><br/>
          <span></span></li>
          <li v-if="step > 12"><b><a target="" href=""></a></b><br/>
          <span></span></li>
          <li v-if="step > 13"><b><a target="" href=""></a></b><br/>
          <span></span></li>
          <li v-if="step > 14"><b><a target="" href=""></a></b><br/>
          <span></span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-whyvue",
  props: ["step"],
  created() {
    this.$emit("upsteps", 10);
  },
};
</script>

<style scoped>
li {
  text-align: start;
}
</style>
