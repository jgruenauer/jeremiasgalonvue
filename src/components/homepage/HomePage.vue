<template>
  <section class="sect-jeremias">
    <TimerWI @go-section="goToSection"></TimerWI>
    <ImageScroller></ImageScroller>
  </section>

  <section class="sect-factsheet">
    <FactsheetSection></FactsheetSection>


    <!--hotpot.ai/art-generator-->
  </section>
  <section class="sect-projects">
    <h1 class="section-heading">EIGENE PROJEKTE</h1>
    <p class="section-paragraph" style="margin-bottom: 50px;">Hier ist ein Auszug einiger Projekte, an denen ich mich in
      der Vergangenheit ausgelebt habe. Stöber gern ein
      bisschen hinein, finde heraus welche Herausforderungen es zu bewältigen galt hat und wie das Endergebnis
      aussah!</p>
    <ProjectsOverview></ProjectsOverview>
  </section>
  <section class="sect-timer" ref="sectTimer">
    <h1 class="section-heading">TIME ohne INCIDENT</h1>
    <TimerSection></TimerSection>
  </section>
  <section class="sect-toying">
    <h2>"Coming Maybe"</h2>
  </section>
  <section class="sect-contact">
    <h2>"Coming Never"</h2>
  </section>
</template>

<script>
import TimerWI from './sect-jeremias/TimerWI.vue';
import ImageScroller from './sect-jeremias/ImageScroller.vue';
import FactsheetSection from './sect-factsheet/FactsheetSection.vue';
import ProjectsOverview from './sect-projects/ProjectsOverview.vue';
import TimerSection from './sect-timer/TimerSection.vue';

export default {
  name: "HomePage",
  components: { TimerWI, ImageScroller, FactsheetSection, ProjectsOverview, TimerSection },
  methods: {
    goToSection(sectionRef) {
      var element = this.$refs[sectionRef];
      var top = element.offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    },
  }
}
</script>

<style>
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
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 50px 0;
}

.sect-projects {
  color: white;
  text-align: center;
  height: fit-content;
  padding: 50px 0px 70px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.sect-timer {
  background-color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;

  height: fit-content;
  padding: 50px 0px;
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

.section-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 80px;
}

.section-paragraph {
  margin: 0;
  width: 50%
}
</style>