<template>
    <section class="sect-jeremias"></section>
    <section class="sect-factsheet"></section>
    <section class="sect-projects"></section>
    <section class="sect-contact"></section>
</template>

<script>
    export default{
        name: "HomePage"
    }
</script>

<style>
    section{
  height: 200px;
}
.sect-jeremias{
  background-image: url('./../../assets/ichviel.png');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
}
.sect-factsheet{
  background-color: white;
}
.sect-contact{
  background-color: white;
}
</style>