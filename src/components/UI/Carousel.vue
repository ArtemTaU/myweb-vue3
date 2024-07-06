<template>
    <div :class="cssClass">
        <div class="carousel-container">
            <div class="carousel-item" v-for="(item, index) in items" :key="index" :class="{'active': index === activeIndex}">
                <h3>{{ item.title }}</h3>
                <p>{{ item.content }}</p>
                <slot>                    
                </slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
      cssClass: {
        type: String,
        default: '' 
      },
      items: {
        type: Array,
        required: true
      },
      itemClass: {
        type: String,
        default: ''
      },
      interval: {
        type: Number,
        default: 3000
      }
    },
    data() {
        return {
            activeIndex: 0,
            timer: null
        };
    },
    mounted() {
        this.startAutoSlide();
    },
    beforeDestroy() {
        this.stopAutoSlide();
    },
    methods: {
        next() {
            this.activeIndex = (this.activeIndex + 1) % this.items.length;
        },
        prev() {
            this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
        },
        startAutoSlide() {
            this.timer = setInterval(this.next, this.interval);
        },
        stopAutoSlide() {
            clearInterval(this.timer);
        }
    }
}
</script>

<style scoped>
.carousel-container {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.carousel-item {
  min-width: 100%;
  display: none;
  transition: transform 0.5s ease-in-out;
}

.carousel-item.active {
  display: block;
  transform: translateX(0);
}
</style>