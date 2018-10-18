<template>
    <div id="vv">
      <transition enter-active-class="fadeInDown"
        leave-active-class="fadeOutLeftBig">
        <router-view/>
      </transition>
    </div>
</template>

<script>
import VueRouter from "vue-router";
export default {
  name: "app",
  router: new VueRouter({
    routes: [
      {path: "/", redirect: "/capa"},
      {path: "/capa", component: require("./components/slide-capa.vue")},
    ],
  }),
};
</script>

<style>
#vv {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
