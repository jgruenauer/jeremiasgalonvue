<script>
//import HelloWorld from './components/HelloWorld.vue'
/* import BlogPage from './components/blog/BlogPage.vue';
import HomePage from './components/homepage/HomePage.vue'; */
import MenuBar from './components/menu/MenuBar.vue';

export default {
  name: 'App',
  components: {
    MenuBar,
  }
}
</script>

<template>
  <header><MenuBar></MenuBar></header>
  <router-view></router-view>
  <footer></footer>
</template>

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
