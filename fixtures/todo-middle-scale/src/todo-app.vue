<template>
  <fieldset>
    <legend>TODO APP</legend>
    <todo-form :newtodo="newtodo" @add="add"/>
    <ul>
      <li v-if="list.length==0">
        Agenda livre yaaay
      </li>
     <todo-item v-for="item in list" :key="item.id" :item="item" @rm="rm"/>
    </ul>
  </fieldset>
</template>

<script>
module.exports = {
  name: "todo-app",
  data: _ => ({list: [], newtodo: {name: ""}}),
  methods: {
    add() {
      this.newtodo.id = new Date().getTime();
      this.list.unshift(this.newtodo);
      this.newtodo = {
        name: "",
      };
    },
    rm(item) {
      this.list = this.list.filter(e => e != item);
    },
  },
};
</script>

<style>
</style>
