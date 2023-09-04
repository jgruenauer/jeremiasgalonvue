<template>
  <div class="project-card">
    <img class="project-image" :src="imageSrc" :alt="cardTitle"/>
    <div class="project-description">
      <p> {{ cardTitle }}</p>
      <p>{{ cardDescription }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ProjectCard",
  props:{
    imageSrc: String,
    cardTitle: String,
    cardDescription: String
  }
}
</script>
  
<style>
.project-card {
  height: 300px;
  width: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  object-fit:cover;
  
  -webkit-box-reflect:below 2px linear-gradient(transparent, transparent, #0004);
  
  transform-origin:center;
  transform:perspective(800px) rotateY(20deg);
  transition:0.5s;

}

.project-title {
  position: absolute;

}

.project-image {}

.project-description {
  position: absolute;
  align-self: end;
  color: black;
  transform: translateY(+100%);
  transition: transform 0.5s ease-out;
  background-color: white;
  width: 100%;
  height: 30%;


}

.project-card:hover .project-description {
  transform: translateY(0);
  transition: transform 0.5s ease-out;
}
</style>