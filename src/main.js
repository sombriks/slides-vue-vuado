import 'animate.css'

import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'

Vue.use(VueRouter)

Vue.component("slide-agenda", require("./components/slide-agenda.vue"))
Vue.component("slide-whoami", require("./components/slide-whoami.vue"))
Vue.component("slide-historia", require("./components/slide-historia.vue"))
Vue.component("slide-whyvue", require("./components/slide-whyvue.vue"))
Vue.component("slide-scaleupdown", require("./components/slide-scaleupdown.vue"))
Vue.component("slide-questions", require("./components/slide-questions.vue"))


new Vue({
  el: "#app",
  render: h => h(App)
})