<template>
  <div>
    <h1>Agenda</h1>
    <p v-if="step >= 2" class="s">$ whoami</p>
    <p v-if="step >= 2" class="s">Um pouco de história</p>
    <p v-if="step >= 2" class="s">Por que adotar Vue</p>
    <p v-if="step >= 2" class="s">Escalando para cima e para baixo</p>
    <p v-if="step >= 2" class="s">Perguntas</p>
    <!-- <small style="color:red">Estamos contratando!!!</small> -->
  </div>
</template>

<script>
export default {
  name: "slide-agenda",
  props: ["step"],
  created() {
    this.$emit("upsteps", 3);
  },
};
</script>

<style scoped>
</style>
