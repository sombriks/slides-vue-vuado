<template>
    <form @submit.prevent="add">
    <input v-model="newtodo.name" required />
    <input type="submit" />
  </form>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "todo-form",
  data() {
    return {
      newtodo: {
        name: "",
      },
    };
  },
  computed: mapState(["todolist"]),
  methods: {
    add() {
      const list = this.todolist;
      this.newtodo.id = new Date().getTime();
      list.push(this.newtodo);
      this.$store.commit("updatetodolist", list);
      this.newtodo = {name: ""};
    },
  },
};
</script>

<style>
</style>
