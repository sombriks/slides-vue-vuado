import 'animate.css'
import 'eagle.js/dist/eagle.css'

import Vue from 'vue'
import Eagle from "eagle.js"

import App from './App.vue'

Vue.use(Eagle)

import SlideCapa from "./components/slide-capa.vue";
import SlideAgenda from "./components/slide-agenda.vue";
import SlideWhoami from "./components/slide-whoami.vue";
import SlideHistoria from "./components/slide-historia.vue";
import SlideWhyVue from "./components/slide-whyvue.vue";
import SlideScaleUpDown from "./components/slide-scaleupdown.vue";
import SlideQuestions from "./components/slide-questions.vue";

Vue.component("slide-capa", SlideCapa);
Vue.component("slide-agenda", SlideAgenda);
Vue.component("slide-whoami", SlideWhoami);
Vue.component("slide-historia", SlideHistoria);
Vue.component("slide-whyvue", SlideWhyVue);
Vue.component("slide-scaleupdown", SlideScaleUpDown);
Vue.component("slide-questions", SlideQuestions);

new Vue({
  el: "#app",
  render: h => h(App)
})