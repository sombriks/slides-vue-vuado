<template>
  <div>
    <pre v-if="step ==1" style="color:darkred;">
      O presente material expressa 
      as visões de seu autor e unicamente 
      isto. Não representa verdades 
      universais e nem pretende refutar 
      qualquer tese concorrente.

      Adicionalmente, procura-se aqui não 
      desmerecer nenhuma opinião, 
      tecnologia ou qualquer outra forma 
      de ponto de vista de terceiros, 
      por mais estúpida que a posição 
      dos outros possa ser.

      Pede-se ajuda ao público para rir 
      em caso de qualquer forma de 
      desrespeito, intencional ou não, 
      e assim fazer o palestrante 
      seguir o baile.
    </pre>
    <img v-if="step ==2" src="../assets/weekomp.png"/>
    <h1 v-if="step >=3">Vue Vuado</h1>
    <img v-if="step >=4" src="../assets/logo.png"/>
    <h2  v-if="step ==5">O moderno e eficiente também é simples e prático</h2>
  </div>
</template>

<script>
export default {
  name: "slide-capa",
  props: ["step"],
  created() {
    this.$emit("upsteps", 5);
  },
};
</script>
<style>
</style>
