<template>
  <div id="header">
    <b>To Do List &nbsp;</b>
    <div id="date">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      time: "",
    };
  },
  created() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekList = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    const week = weekList[now.getDay()];
    this.time = `${month}/${date} ${week}`;
  },
};
</script>


<style scoped>
#header {
  font-size: 45px;
  text-align: center;
  background-color: rgb(238, 234, 228);
  height: 70px;
  padding-top: 20px;
}
#date {
  display: inline;
  font-size: 20px;
}
</style>
