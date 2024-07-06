<template>
    <div class="img-carousel">     
        <div class="carousel-item" v-for="(item, index) in items.images" :key="index" :class="{'active': index === activeIndex}">
            <img 
              :src="getImage(item)" 
              :alt="'Project Image ' + (index + 1)" 
              class="carousel-image"
              :style = "imgOffset(0)"
            >
        </div>
    </div>
</template>

<script>
import { allProjects } from '@/data/projects.js';

export default {
    props: {
      items: {
        type: Object,
        required: true
      },
      interval: {
        type: Number,
        default: 3000
      }
    },

    data() {
        return {
            activeIndex: 0,
            timer: null,
        } 
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeDestroy() {
        this.stopAutoSlide();
    },
    methods: {        
        getImage(image) {
            return require(`@/assets/images/projects_images/${image}`);
        },

        next() {
            this.activeIndex = (this.activeIndex + 1) % this.items.images.length;
        },
        prev() {
            this.activeIndex = (this.activeIndex - 1 + this.items.images.length) % this.items.images.length;
        },
        startAutoSlide() {
            this.timer = setInterval(this.next, this.interval);
        },
        stopAutoSlide() {
            clearInterval(this.timer);
        },
        imgOffset(index) {
            return 'margin-top:'+ (5 * index) + '%; margin-left:'+ (5 * index) + '%;'
        }
    }
}
</script>

<style scoped>
.img-carousel {
    position: relative;
    overflow: hidden;
    box-shadow: var(--main-box-outset-shadow);
    border-radius: 20px;  
    max-height: 50vh;  
}


.carousel-item {
    display: none;
    position: relative;
    overflow: hidden;
}

.carousel-item.active {
    display: block;
    transform: translateX(0);
}

.carousel-image {
    height: 100%; 
    object-fit: cover;
    border-radius: 20px;
    max-height: 50vh;
}
</style>
