<template>
    <div class="image-scroll" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
        <div class="scroll-container" :style="{ transitionDuration: transitionDuration + 's' }">
            <div class="images" ref="images" :style="{ transform: `translateX(${translateX}px)` }">
                <img v-for="(image, index) in extendedImages" :src="image" :key="index" alt="Image" />
            </div>
        </div>
    </div>
</template>
          
<script>
export default {
    data() {
        return {
            name: "ImageScroller",
            images: [
                require('./jeremiasgalon-webpage-banner-cut.webp'),
            ],
            translateX: 0,
            hovered: false,
            hoverSpeed: 2,
            slowSpeed: 1,
            animationId: null
        };
    },
    computed: {
        extendedImages() {
            // Duplicate the images array to create a continuous loop
            // future usability may require to check if two images are enough!
            return [...this.images, ...this.images];
        }
    },
    methods: {

        animate() {
            this.translateX -= this.hovered ? this.hoverSpeed : this.slowSpeed;

            const containerWidth = this.$refs.images.offsetWidth;

                // Check if scrolled beyond the total width of the images
            if (Math.abs(this.translateX) >= containerWidth / 2) {
                this.translateX = 0;
            }

            this.animationId = requestAnimationFrame(this.animate);
            }
            
        },
        handleMouseOver() {
            this.hovered = true;
        },
        handleMouseLeave() {
            this.hovered = false;
        }
    },
    mounted() {
        this.animationId = requestAnimationFrame(this.animate);
    },
    beforeUnmount() {
        cancelAnimationFrame(this.animationId);
    }
};
</script>

<style>
.image-scroll {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

.scroll-container {
    white-space: nowrap;
    height: 100%;
}

.scroll-container.hovered {
    transition: transform 0.2s ease-in-out;
}

.images {
    display: inline-block;
    height: 100%;
}

img {
    display: inline-block;
    height: 100%;

}
</style>