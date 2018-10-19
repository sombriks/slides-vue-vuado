<template>
  <ul>
    <todo-item v-for="it in todolist" :item="it" :key="it.id" @rm="rm"/>
    <li v-if="todolist.length == 0">Yaaay agenda livre!</li>
  </ul>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "todo-list",
  computed: mapState(["todolist"]),
  methods: {
    rm(item) {
      const list = this.todolist.filter(e => e.id != item.id);
      this.$store.commit("updatetodolist", list);
    },
  },
};
</script>

<style>
</style>
