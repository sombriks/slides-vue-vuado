<template>
  <div id="vv">
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-capa/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-agenda/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-whoami/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-historia/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-whyvue/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-scaleupdown/>
    </slide>
    <slide enter="fadeInDown" leave="fadeOutDown" enterPrev="fadeInDown" leavePrev="fadeInDown" enterNext="fadeInDown" leaveNext="fadeOutDown">
      <slide-questions/>
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
