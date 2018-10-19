import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

import TodoForm from './components/TodoForm.vue'
Vue.component('todo-form', TodoForm)
import TodoItem from './components/TodoItem.vue'
Vue.component('todo-item', TodoItem)
import TodoList from './components/TodoList.vue'
Vue.component('todo-list', TodoList)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')