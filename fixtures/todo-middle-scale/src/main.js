// require parece uma função, mas é a marcação de importação do commonsjs
const Vue = require("vue");
Vue.component("todo-form", require("./todo-form.vue"));
Vue.component("todo-item", require("./todo-item.vue"));
new Vue({
  el: "#app",
  render: r => r(require("./todo-app.vue"))
});