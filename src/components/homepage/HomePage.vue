<template>
    <section class="sect-jeremias"></section>
    <section class="sect-factsheet"></section>
    <section class="sect-projects"></section>
    <section class="sect-contact">
      <span>Taegliches Update - jeweils um 0:00!</span>
    </section>
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
  align-items: center;
  display: flex;
  justify-content: center;
}
.sect-contact span{
  text-align: center;
  color: black;
  font-size: 30px;
}
</style>