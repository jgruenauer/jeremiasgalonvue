<template>
    <div class="project-cards-container">
        <ProjectCard class="card-container" v-for="(card, index) in cards" :key="index" :imageSrc="card.imageSrc"
            :cardTitle="card.cardTitle" :cardDescription="card.cardDescription"></ProjectCard>
    </div>
</template>
  
<script>
import ProjectCard from "./ProjectCard.vue";

export default {


    data() {
        return {
            cards: [
                {
                    imageSrc: require('./../../../assets/project-diplomarbeit-1.png'),
                    cardTitle: 'Diplomarbeit',
                    cardDescription: 'Description for Card 1',
                },
                {
                    imageSrc: require('./../../../assets/project-music.jpg'),
                    cardTitle: 'Eigene Musik',
                    cardDescription: 'Description for Card 2',
                },
                {
                    imageSrc: require('./../../../assets/project-protfolio.png'),
                    cardTitle: 'Portfolio Website',
                    cardDescription: 'Description for Card 3',
                },
                // Add more cards here, up to 10 in total
            ],
        };
    },
    components: {
        ProjectCard
    },
    methods: {
        onMouseOver: function () {

        }
    }
};
</script>
  
<style>
.project-cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: fit-content;
    height: fit-content;
}

.project-cards-container:hover .card-container {
    opacity: 0.3;
}

.card-container:hover {
    cursor: pointer;
    transform: perspective(800px) rotateY(0deg);
    opacity: 1 !important;
}
</style>
  