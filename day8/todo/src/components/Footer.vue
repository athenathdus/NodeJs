<template>
  <div id="footer">
    2021 Summer Immersion Education<br />
    Park So yeon
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#footer {
  text-align: center;
  background-color: rgb(238, 234, 228);
  height: 80px;
  padding-top: 30px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  font-size: 20px;
}
</style>