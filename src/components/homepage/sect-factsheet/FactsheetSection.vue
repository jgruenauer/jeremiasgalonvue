  <!--<img src="./../../../assets/tubetv_trans.png" style="height: 400px;"/>-->
<template>
  <div class="sticky-scroll-container">
    <div class="left">
      <div class="fact-element">
        <div>
          <h2 class="fact-header">2023: Universität Buxtehude</h2>
          <p class="fact-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sunt! Quaerat labore
            assumenda, minus exercitationem consectetur molestias dolores delectus molestiae tenetur illum vitae
            voluptatibus, reprehenderit minima vero pariatur rerum ad.</p>
        </div>
      </div>
      <div class="fact-element">
        <div>
          <h2 class="fact-header">2022-2023: Zivildienst Rotes Kreuz</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis natus nobis officiis aut optio, maiores
            asperiores soluta impedit illum explicabo eligendi consequuntur minima. Cupiditate temporibus eaque excepturi
            ad, quidem odit!</p>
        </div>
      </div>
      <div class="fact-element">
        <div>
          <h2 class="fact-header">2017-2022: HTL Grieskirchen</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis natus nobis officiis aut optio, maiores
            asperiores soluta impedit illum explicabo eligendi consequuntur minima. Cupiditate temporibus eaque excepturi
            ad, quidem odit!</p>
        </div>
      </div>
      <div class="fact-element">
        <div>
          <h2 class="fact-header">2005-2008: Kindergarten Gangster</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis natus nobis officiis aut optio, maiores
            asperiores soluta impedit illum explicabo eligendi consequuntur minima. Cupiditate temporibus eaque excepturi
            ad, quidem odit!</p>
        </div>
      </div>
    </div>
    <div class="right" style="height: 100vh;">
      <img src="./../../../assets/tubetv_trans.png" style="height: 400px;" />
    </div>
  </div>
</template>
  
<script>
export default {

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
  align-items: center;
  padding: 0 20px;
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