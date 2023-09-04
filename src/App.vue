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
  <footer>
    <span class="page-footer">(haha brauch kein Impressum. BOOM!)</span>
  </footer>
</template>

<style>
#app {
  background-color: black;
  
  font-family: 'Oswald';
}

footer{
  display: grid;
}

.page-footer{
  text-align: center;
  color: white;
  font-size: 10px;
  font-family: 'Quicksand';
  padding: 5px;
}

p{
  font-family: 'Quicksand';
  font-size: 16px;
  font-weight: 400;
}

.span{
    font-family: 'Quicksand';
    font-size: 16px;
    font-weight: 400;
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
