<template>
  <div>
    <h1>Agenda</h1>
    <p v-if="step >= 2" class="s">$ whoami</p>
    <p v-if="step >= 2" class="s">Um pouco de história</p>
    <p v-if="step >= 2" class="s">Por que adotar Vue</p>
    <p v-if="step >= 2" class="s">Escalando para cima e para baixo</p>
    <p v-if="step == 3" class="s" style="color:red">&#10085;&#10085;&#10085; Estamos contratando!!! &#10085;&#10085;&#10085;</p>
    <p v-if="step == 4" class="s">Perguntas</p>
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
