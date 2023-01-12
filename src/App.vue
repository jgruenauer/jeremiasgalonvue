<template>
  <header><MenuBar></MenuBar></header>
  <HomePage></HomePage>
  
  <footer></footer>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/homepage/HomePage.vue';
import MenuBar from './components/menu/MenuBar.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
    HomePage
}
}
</script>

<style>
#app {
  background-color: black;
  
  font-family: 'Oswald';
}
</style>

<!--
font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 -->
