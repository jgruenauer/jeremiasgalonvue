  <!--<img src="./../../../assets/tubetv_trans.webp" style="height: 400px;"/>-->
<template>
  <div class="sticky-scroll-container">
    <div class="left">
      <div class="fact-element">
        <div class="fact-upper"></div>
        <div class="fact-middle">
          <h2 class="fact-header">2023: Universität Regensburg</h2>
          <p>Jeremias glaubt es selber noch nicht so wirklich, aber er studiert Medizin.</p>
        </div>
        <div class="fact-lower"></div>
      </div>
      <div class="fact-element">
        <div class="fact-upper"></div>
        <div class="fact-middle">
          <h2 class="fact-header">2022-2023: Zivildienst Rotes Kreuz</h2>
          <p>Im Rahmen des österreichischen Zivildienstes meldet sich Jeremias beim Roten Kreuz. Er wird zum Sanitäter ausgebildet - zwei
            Monate Theorie und Praxis - und arbeitet anschließend als vollwärtige Arbeitskraft 48h die Woche. Hier sammelt er einige Erfahrungen
            mit gesundheitlichen Extremsituationen, wird professioneller Seniorenunterhalter und knüpft neue Kontakte.
          </p>
        </div>
        <div class="fact-lower"></div>
      </div>
      <div class="fact-element">
        <div class="fact-upper"></div>
        <div class="fact-middle">
          <h2 class="fact-header">2017-2022: HTL Grieskirchen Medizininformatik</h2>
          <p>An der HTL lernt Jeremias das Programmieren. Dabei kommt er in Berührung mit Java, C#, 
            Python, Webprogrammierung, diversen Frameworks, ... Erste Erfahrungen in der Arbeitswelt sammelt er in Form von
            Praktika im Medizin- und Informatikbereich. Jeremias' Leistungen sind nach Oma immer - "fad".
          </p>
        </div>
        <div class="fact-lower"></div>
      </div>
      <div class="fact-element">
        <div class="fact-upper"></div>
        <div class="fact-middle">
          <h2 class="fact-header">2005-2008: Kindergarten Gangster</h2>
          <p>Am gefährlichsten war Jeremias wohl im Kindergarten. Die Bande und er regieren mit eiserner Faust.
            Schnell ist die begehrte Burg im Spielgarten besetzt und Eindringlinge die es wagen auch hier spielen zu wollen,
            bekommen die Kieselsteine rund um die Festung mit Präzision ins Gesicht geschleudert.
          </p>
        </div>
        <div class="fact-lower"></div>
      </div>
    </div>
    <div class="right" style="height: 100vh;">
      <img :src="defaultImageSrc" style="height: 400px;" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: "FactsheetSection",
  data() {
    return {
      defaultImageSrc: require('./../../../assets/tubetv_trans.webp'),
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var viewPortHeight = window.innerHeight;
      //console.log(window.scrollY);
      if (window.scrollY < viewPortHeight*1.7) {
        return(this.defaultImageSrc = require('./../../../assets/tubetv_trans.webp'));
      }
      if (window.scrollY >= viewPortHeight*1.7 && window.scrollY < viewPortHeight*2.6) {
        return(this.defaultImageSrc = require('./../../../assets/tubetv_ambulance.webp'));
      }
      if (window.scrollY >= viewPortHeight*2.6 && window.scrollY < viewPortHeight*2.7) {
        return(this.defaultImageSrc = require('./../../../assets/tubetv_ambulance_transition.webp'));
      }
      if (window.scrollY >= viewPortHeight*2.7 && window.scrollY < viewPortHeight*3.6) {
        return(this.defaultImageSrc = require('./../../../assets/tubetv_htl.webp'));
      }
      if (window.scrollY >= viewPortHeight*3.6 && window.scrollY < viewPortHeight*3.7) {
        return(this.defaultImageSrc = require('./../../../assets/tubetv_htl_transition.webp'));
      }
      if (window.scrollY >= viewPortHeight*3.7) {
        return(this.defaultImageSrc = require('./../../../assets/tubetv_kindergarten.webp'));
      }
    }
  }
};
</script>
  
<style>
.sticky-scroll-container {
  width: 80%;
  display: flex;
  height: 100%;
}

.left {
  width: 50%;
}

.fact-element {
  height: 100vh;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}

.fact-upper, .fact-lower{
  flex: 1;
  margin-left: 75%;
  border-right: dashed 2px #b3b3b3;
}

.fact-upper{
  position: relative;
}

.fact-upper::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 20px;
  height: 20px;
  background-color: #b3b3b3;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  border-radius: 10px;;
}

.fact-middle{
  margin: 50px 0px;
  width: 100%;
}

.fact-header {
  width: 100%;
}

.fact-text {
  width: 100%;
}

.right {
  width: 50%;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Add any desired styling for the right side here */
}
</style>