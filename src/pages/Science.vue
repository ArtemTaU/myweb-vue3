<template>
    <div class="projects-page">
        <NavbarProjects 
            :items="projects" 
            :currentItemIndex="currentItemIndex" 
            @updateCurrentItem="updateCurrentItemIndex"
        />
        <div v-for="(project, index) in projects"> 
          <div v-if="index % 2 === 0">    
            <my-grid-container :id="'project-' + index"  :cssClass=gridClass(index)>
                <div class="grid-item">    
                    <h2> {{ project.name }} </h2>  
                    <p> {{ project.description }} </p> 
                    <p> <i>Journal: {{ project.journal }}</i></p> 
                    <a  class="custom-reset" :href="project.link" target="_blank"><p class="project-link">{{ project.link }}</p></a>     
                </div>
                <div class="grid-item img-grid">
                    <ImgCarousel :items="project">
                    </ImgCarousel>          
                </div>
            </my-grid-container>
          </div>
          <div v-else>    
            <my-grid-container :id="'project-' + index" :cssClass=gridClass(index)>
                <div class="grid-item img-grid">
                    <ImgCarousel :items="project">
                    </ImgCarousel>          
                </div>
                <div class="grid-item">    
                    <h2> {{ project.name }} </h2>  
                    <p> {{ project.description }} </p> 
                    <a  class="custom-reset" :href="project.link" target="_blank"><p class="project-link">{{ project.link }}</p></a>        
                </div>                
            </my-grid-container>
          </div>
        </div>
    </div>
</template>

<script>
import { allArticles } from '@/data/articles.js';
import ImgCarousel from '@/components/ImgCarousel.vue';
import NavbarProjects from '@/components/NavbarProjects.vue';
import VueScrollTo from 'vue-scrollto';


export default {
    components:{
        ImgCarousel,
        NavbarProjects,
    },
    data() {
        return {
            projects: allArticles,
            currentItemIndex: 0,
            isScrolling: false,
            hasScrollHandler: false,
        } 
    },
    methods: {
      gridClass(index) {
        if (index  % 2 === 0){
            return "grid-projects grid-el left" 
        }
        else {
            return "grid-projects grid-el right"           
        }
      },
      updateCurrentItemIndex(newIndex) {
        this.currentItemIndex = newIndex;
        this.scrollToProject(newIndex);
      },
      scrollToProject(index) {
        VueScrollTo.scrollTo(`#project-${index}`, 500, {
          easing: 'ease-in-out',
        });
      },
      debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
      },
      handleScroll(event) {
          if (this.isScrolling) return;
          this.isScrolling = true;

          const delta = Math.sign(event.deltaY || this.touchDelta);
          if (delta > 0 && this.currentItemIndex < this.projects.length - 1) {
              this.currentItemIndex++;
              this.scrollToProject(this.currentItemIndex);
          } else if (delta < 0 && this.currentItemIndex > 0) {
              if (this.currentItemIndex !== 0) {
                  this.currentItemIndex--;
                  this.scrollToProject(this.currentItemIndex);
              }
          }

          setTimeout(() => {
              this.isScrolling = false;
          }, 250);
      },
      handleTouchStart(event) {
          this.touchStartY = event.touches[0].clientY;
      },

      handleTouchEnd(event) {
          this.touchEndY = event.changedTouches[0].clientY;
          this.touchDelta = this.touchStartY - this.touchEndY;
          this.handleScroll(event);
      },
      addScrollHandler() {
          if (!this.hasScrollHandler) {
              this.debouncedHandleScroll = this.debounce(this.handleScroll, 100);
              this.boundHandleTouchStart = this.handleTouchStart.bind(this);
              this.boundHandleTouchEnd = this.handleTouchEnd.bind(this);

              window.addEventListener('wheel', this.debouncedHandleScroll);
              window.addEventListener('touchstart', this.boundHandleTouchStart);
              window.addEventListener('touchend', this.boundHandleTouchEnd);
              this.hasScrollHandler = true;
          }
      },

      removeScrollHandler() {
          if (this.hasScrollHandler) {
              window.removeEventListener('wheel', this.debouncedHandleScroll);
              window.removeEventListener('touchstart', this.boundHandleTouchStart);
              window.removeEventListener('touchend', this.boundHandleTouchEnd);
              this.hasScrollHandler = false;
          }
      },
    },
    mounted() {
      this.addScrollHandler();
    },
    beforeRouteLeave(to, from, next) {
      this.removeScrollHandler();
      next();
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.addScrollHandler();
      });
    },
}
</script>

<style scoped>
.grid-projects{
    padding: 10vh 8vw;
    min-height: 90vh;
    align-items: start;
    background: linear-gradient(to bottom, rgb(30, 0, 255) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgb(30, 0, 255) 100%);
}

.grid-el{
  display: grid;  
  gap: 30px
}
.grid-el.left{
  grid-template-columns: 2fr 3fr;
}
.grid-el.right{
  grid-template-columns: 3fr 2fr;
}

a.custom-reset {
  color: var(--main-color);
  cursor: pointer;
  font-size: var(--p-font-size);
}

.tech-item {
  white-space: nowrap; 
  display: inline-flex;
  margin-right: 20px; 
  margin-top: 10px;
  vertical-align: middle;
}

.logo-style {
    width: auto;
    height: 20px;
    border: none;
    box-shadow: none;
    margin-right: 5px;
}

.img-grid {
    display: flex;
    justify-content: center;
}

@media (max-width: 480px) {
  .grid-projects{
      padding: 4vh 20px;
      height: 100vh;
      align-items: start;
      background: linear-gradient(to bottom, rgb(30, 0, 255) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgb(30, 0, 255) 100%);
  }
  .grid-item {
      width: 90vw;
      min-height: 40vh;
      padding: 2vh 20px;
      padding-bottom: 0;
  }

  .grid-el{
    display: grid;  
    gap: 10px
  }
  .grid-el.left{
    grid-template-columns: 1fr;
  }
  .grid-el.right{
    grid-template-columns: 1fr;
  }
  a.custom-reset {
    font-size: var(--p-font-size-mobile);
  }
  .tech-item {
    margin-right: 10px; 
    margin-top: 10px;
  }
  .logo-style {
      height: 15px;
  }
  .project-link{
    max-width: 87vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>