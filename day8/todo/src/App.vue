<template>
  <div>
    <Header></Header>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "TodoList",
  components: {
    Header: Header,
    Footer: Footer,
    List: List,
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f8f7f2;
}
</style>
