<template>
    <div class="img-carousel">     
        <div 
          class="carousel-item" v-for="(item, index) in items.images" 
          :key="index" 
          :class="{'active': index === activeIndex}"
        >
            <img 
              :src="getImage(item)" 
              :alt="'Project Image ' + (index + 1)" 
              class="carousel-image"
              :style="imgStyle(index)"              
            >
        </div>
    </div>
</template>

<script>
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
        imgStyle(index) {
            const totalImages = this.items.images.length;
            const width =  100 - (totalImages + 1) * 5; 
            return {
                maxWidth: `${width}%`,
                marginTop: `${5 * index}vh`,
                marginLeft: `${5 * index}vw`,
                position: 'relative'
            };
        }
    }
}
</script>

<style scoped>
.img-carousel {
    position: relative;
    border-radius: 20px;  
    width: 100%;
    height: 100%;
}


.carousel-item {
    position: absolute;
    transition: transform 0.5s ease-in-out;
    padding: 2vh 2vw;
}

.carousel-item.active {
    display: block;
    transform: translateX(0);
    z-index: 1;
    transform: scale(1.15); 
}

.carousel-image {
    border-radius: 20px;
    display: block;
    height: auto;
    max-height: 400px;
    box-shadow: 0 0 10px 3px rgb(88 88 88 / 73%);
}

@media (max-width: 480px) {
    .carousel-image {
        max-height: 25vh;
    }
    .carousel-image {
        border-radius: 10px;
    }
}
</style>
