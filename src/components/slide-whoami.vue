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
        <img class="w" v-if="step ==2" src="../assets/techpar.png"/>
        <img class="w" v-if="step >=3" src="../assets/logo-techpar-novo.jpg"/>
      </div>
    </div>
    <div class="row" v-if="step >= 3">
      <div class="col-xs-6 col-sm-4"> 
        <ul>
          <li>11+ yrs professional developer</li>
          <li>16+ yrs tech enthusiast (i.e. rpg maker 95/2003 pre-ruby)</li>
          <li>20+ yrs super nintendo player</li>
          <li>~5 min vue evangelist</li>
          <li v-if="step==5"><a href="https://sombriks.com.br/#/" target="me">https://sombriks.com.br</a></li>
        </ul>
      </div>    
      <div class="col-xs-6 col-sm-4">
        <p>Patrimônio da Engenharia da Computação (2007.2, aguardando tombamento)</p>
        <p v-if="step==5">Membro da iniciativa <b>HelloJS</b></p>
      </div>    
      <div class="col-xs-6 col-sm-4">
        <p>Sócio fundador da TechPar - Tecnologia e Participações</p>
        <small v-if="step == 4" style="color:red">Hiring!!!!</small>
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
li {
  text-align: start;
}
.w {
  width: 50%;
}
li {
  font-size: xx-large;
}
</style>
