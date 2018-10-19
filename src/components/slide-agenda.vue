<template>
  <div>
    <h1>Agenda</h1>
    <div class="row">
      <div class="col-xs-11 col-xs-offset-1">
        <ul>
          <li v-if="step >= 2">$ whoami</li>
          <li v-if="step >= 2">Um pouco de história</li>
          <li v-if="step >= 2">Por que adotar Vue</li>
          <li v-if="step >= 2">Escalando para cima e para baixo</li>
          <li v-if="step == 2">Perguntas?</li>
          <li v-if="step == 3" style="color:red">&#10085;&#10085;&#10085; Estamos contratando!!! &#10085;&#10085;&#10085;</li>
          <li v-if="step == 4">Perguntas?</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-agenda",
  props: ["step"],
  created() {
    this.$emit("upsteps", 4);
  },
};
</script>

<style scoped>
li {
  text-align: start;
}
/* https://br.vuejs.org/v2/guide/transitions.html */
/* Animações de entrada e saída podem utilizar diferentes  */
/* funções de duração e de tempo.                          */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
