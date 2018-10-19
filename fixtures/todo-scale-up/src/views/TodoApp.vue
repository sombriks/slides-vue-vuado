<template>
  <fieldset>
    <legend>Total TODO's: {{todolist.length}}</legend>
    <todo-form/>
    <todo-list/>
  </fieldset>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "todo-app",
  computed: mapState(["todolist"]),
};
</script>

<style>
</style>
