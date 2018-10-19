<template>
  <form @submit.prevent="$emit('add',newtodo)">
    <input v-model="newtodo.name" required />
    <input type="submit" />
  </form>
</template>

<script>
module.exports = {
  name: "todo-form",
  props: ["newtodo"],
};
</script>

<style>
</style>
