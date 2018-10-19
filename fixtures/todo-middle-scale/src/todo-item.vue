<template>
  <li>
  #{{item.id}} - {{item.name}} <button @click="$emit('rm',item)">X</button>
  </li>
</template>

<script>
module.exports = {
  name: "todo-item",
  props: ["item"],
};
</script>

<style>
</style>
