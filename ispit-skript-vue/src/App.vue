<template>
  <div id="app">
    <MainHeader></MainHeader>
    <FooterView></FooterView>
  </div>
</template>


<script>
import MainHeader from "./components/MainHeader.vue";
import FooterView from "./components/FooterView.vue";


export default {
  name: 'App',
  components: {
    MainHeader,
    FooterView
  }
}
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>
