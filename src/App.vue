<template>
  <div id="vv">
    <slide :steps="3" enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-capa :step="step"/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-agenda :step="step"/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-whoami :step="step"/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-historia :step="step"/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-whyvue :step="step"/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-scaleupdown :step="step"/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-questions :step="step"/>
    </slide>
  </div>
</template>
<script>
import eagle from "eagle.js";
export default {
  name: "app",
  mixins: [eagle.slideshow],
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
