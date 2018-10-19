<template>
  <li>
  #{{item.id}} - {{item.name}} <button @click="$emit('rm',item)">X</button>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
