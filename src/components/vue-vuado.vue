<template>
<div>
  <slide :steps="2" enter='fadeInRight' leave='fadeInRight'>
    <h1>Vue Vuado</h1>
    <img src="../assets/logo.png"/>
    <h2 v-if="step == 2">Breve história de como o moderno e eficiente também é simples</h2>
  </slide>
  <slide enter='fadeInRight' leave='fadeInRight'>
    <h2>Agenda</h2>
    <p class="s">$ whoami</p>
    <p class="s">Um pouco de história</p>
    <p class="s">Por que adotar Vue</p>
    <p class="s">Escalando para cima e para baixo</p>
    <p class="s">Perguntas</p>
  </slide>
</div>
</template>

<script>
import eagle from "eagle.js";

export default {
  name: "vue-vuado",
  mixins: [eagle.slideshow],
};
</script>
<style>
.s {
  text-align: start;
}
</style>
