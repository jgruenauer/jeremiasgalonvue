<template>
    <div class="project-cards-container">
        <div class="project-card">
            <h2 class="project-title">Diplom</h2>
            <img class="project-image" src="./../../../assets/image2.jpg" />
            <div class="project-description">
                <p >Kurzer Beschreibungs-Kontent</p>
            </div>
            
        </div>
        <div class="project-card">
            <h2 class="project-title">Diplom</h2>
            <img class="project-image" src="./../../../assets/image1.jpg" />
            <div class="project-description">
                <p >Kurzer Beschreibungs-Kontent</p>
            </div>
        </div>
        <div class="project-card">
            <h2 class="project-title">Diplom</h2>
            <img class="project-image" src="./../../../assets/image3.jpg" />
            <div class="project-description">
                <p >Kurzer Beschreibungs-Kontent</p>
            </div>
        </div>
    </div>
</template>
  
<script>


export default {
    data() {
        return {
            cards: [
                {
                    thumbnail: 'path/to/thumbnail1.png',
                    cardTitle: 'Card 1',
                    cardDescription: 'Description for Card 1',
                }
                // Add more cards here, up to 10 in total
            ],
        };
    },
};
</script>
  
<style>
.project-cards-container {
    height: fit-ccontent;
    display: grid;
    column-gap: 20px;
    grid-template-columns: auto auto auto;
    justify-content: center;
}

.project-card {
    height: 300px;
    width: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.project-title {
    position: absolute;

}

.project-image {
}

.project-description{
    position: absolute;
    align-self: end;
    color: white;
    transition: transform 0.5s ease-out;



}
</style>
  