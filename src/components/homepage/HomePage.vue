<template>
  <section class="sect-jeremias">
    <TimerWI></TimerWI>
    <ImageScroller></ImageScroller>
  </section>

  <section class="sect-factsheet">
    <FactsheetSection></FactsheetSection>
    
    
    <!--hotpot.ai/art-generator-->
  </section>
  <section class="sect-projects" >
    
  </section>
  <section class="sect-timer">
    <p>Ah du fragst dich was der Timer für einen Sinn macht (futur)?</p>
    <p>Der Timer steht für eine monatliche Challenge. Diese reicht von Netflix-Entzug, über jeden Tag Sport, bis zu NNN.
      Und du kannst live mitverfolgen, wie lange ich es bereits ohne Fehltritt schaffe.</p>
    <img src="./red-button.webp" style="height: 100px;" />
    <p>Coming "soon"</p>
    <p>Nimm an der Challenge Teil, besieg mich und zeig der Welt wie lange du dabei ist.</p>
    <button>Sign up</button>
  </section>
  <section class="sect-toying">
    <h2>"Coming Soon"</h2>
  </section>
  <section class="sect-contact">
    <h2>"Coming Never"</h2>
  </section>
</template>

<script>
import TimerWI from './sect-jeremias/TimerWI.vue';
import ImageScroller from './sect-jeremias/ImageScroller.vue';
import FactsheetSection from './sect-factsheet/FactsheetSection.vue';


export default {
  name: "HomePage",
  components: { TimerWI, ImageScroller, FactsheetSection }
}
</script>

<style>


section {
  height: 100vh;
}

.sect-jeremias {
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


.sect-factsheet {
  background-color: white;
}

.sect-projects {}

.sect-timer {
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: fit-content;
  padding: 20px;
}

.sect-toying {
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sect-contact {
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>