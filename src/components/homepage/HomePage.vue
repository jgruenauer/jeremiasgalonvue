<template>
    <section class="sect-jeremias">
      <TimerWI></TimerWI>
      <ImageScroller></ImageScroller>
    </section>
  
  <section class="sect-factsheet">
    </section>
    <section class="sect-projects">
      
    </section>
    <section class="sect-contact">
      
    </section>
</template>

<script>
  import TimerWI from './TimerWI.vue';
  import ImageScroller from './ImageScroller.vue';

    export default{
    name: "HomePage",
    components: { TimerWI, ImageScroller }
}
</script>

<style>
    section{
  height: 200px;
}
.sect-jeremias{
  /*
  background-image: url('./../../assets/ichviel.png');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  */
  height: calc(100vh - 100px);
  margin-bottom: 0;

  /*display: flex;
  flex-direction: column;*/
  position: relative;
}


.sect-factsheet{
  background-color: white;
}

.sect-projects{

}

.sect-contact{
  background-color: white;
  
}

</style>