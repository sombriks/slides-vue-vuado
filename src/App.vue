<template>
  <div id="vv">
    <input class="slideindex" v-model="currentSlideIndex" type="number" min="1" max="7"/>
    <slide :steps="s1" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-capa :step="step" @upsteps="s => s1 = s"/>
    </slide>
    <slide :steps="s2" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-agenda :step="step" @upsteps="s => s2 = s"/>
    </slide>
    <slide :steps="s3" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-whoami :step="step" @upsteps="s => s3 = s"/>
    </slide>
    <slide :steps="s4" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-historia :step="step" @upsteps="s => s4 = s"/>
    </slide>
    <slide :steps="s5" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-whyvue :step="step" @upsteps="s => s5 = s"/>
    </slide>
    <slide :steps="s6" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-scaleupdown :step="step" @upsteps="s => s6 = s"/>
    </slide>
    <slide :steps="s7" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-questions :step="step" @upsteps="s => s7 = s"/>
    </slide>
  </div>
</template>
<script>
import eagle from "eagle.js";
export default {
  name: "app",
  mixins: [eagle.slideshow],
  data() {
    return {
      s1: 1,
      s2: 1,
      s3: 1,
      s4: 1,
      s5: 1,
      s6: 1,
      s7: 1,
    };
  },
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
.slideindex {
  position: fixed;
  top: 0px;
  left: 0px;
  border: black 1px solid;
  width: 3em;
  height: 2em;
}
</style>
