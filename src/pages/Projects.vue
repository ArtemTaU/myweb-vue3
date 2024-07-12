<template>
    <div class="projects-page">
        <NavbarProjects 
            :items="projects" 
            :currentItemIndex="currentItemIndex" 
            @updateCurrentItem="updateCurrentItemIndex"
        />
        <div v-for="(project, index) in projects"> 
          <div v-if="index % 2 === 0">    
            <my-grid-container :columns="columsWidth(index)" :id="'project-' + index" cssClass="grid-projects">
                <div class="grid-item">    
                    <h2> {{ project.name }} </h2>  
                    <p> {{ project.description }} </p> 
                    <a  class="custom-reset" :href="project.link" target="_blank"><p>{{ project.link }}</p></a>
                    <p>Стек навыков:</p>
                    <span v-for="tech in project.stack.split(', ')" :key="tech">
                          <a class="custom-reset tech-item" :href="getTechnologyLink(tech)" target="_blank">
                              <img 
                                  :src="getTechnologyLogo(tech)" 
                                  :alt="tech + ' logo'" 
                                  class="logo-style"
                              />
                              {{ tech }}
                          </a>
                    </span>         
                </div>
                <div class="grid-item img-grid">
                    <ImgCarousel :items="project">
                    </ImgCarousel>          
                </div>
            </my-grid-container>
          </div>
          <div v-else>    
            <my-grid-container :columns="columsWidth(index)" :id="'project-' + index" cssClass="grid-projects">
                <div class="grid-item img-grid">
                    <ImgCarousel :items="project">
                    </ImgCarousel>          
                </div>
                <div class="grid-item">    
                    <h2> {{ project.name }} </h2>  
                    <p> {{ project.description }} </p> 
                    <a  class="custom-reset" :href="project.link" target="_blank"><p>{{ project.link }}</p></a>
                    <p>Стек навыков:</p>
                    <span v-for="tech in project.stack.split(', ')" :key="tech">
                          <a class="custom-reset tech-item" :href="getTechnologyLink(tech)" target="_blank">
                              <img 
                                  :src="getTechnologyLogo(tech)" 
                                  :alt="tech + ' logo'" 
                                  class="logo-style"
                              />
                              {{ tech }}
                          </a>
                    </span>         
                </div>                
            </my-grid-container>
          </div>
        </div>
    </div>
</template>

<script>
import { allProjects } from '@/data/projects.js';
import { technologies } from '@/data/technologies.js';
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
            projects: allProjects,
            technologies,
            currentItemIndex: 0,
            isScrolling: false,
            hasScrollHandler: false,
        } 
    },
    methods: {
      updateCurrentItemIndex(newIndex) {
        this.currentItemIndex = newIndex;
        this.scrollToProject(newIndex);
      },
      getTechnologyLogo(tech) {
        if (this.technologies[tech]) {
          return require(`@/assets/images/logos/${this.technologies[tech].logo}`);
        }
        return '';
      },
      getTechnologyLink(tech) {
        return this.technologies[tech] ? this.technologies[tech].link : '#';
      },
      columsWidth(index) {
        if (index  % 2 === 0){
            return '2fr 3fr'
        }
        else {
            return '3fr 2fr'          
        }
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

        const delta = Math.sign(event.deltaY);
        if (delta > 0 && this.currentItemIndex < this.projects.length - 1) {
            this.currentItemIndex++;
            this.scrollToProject(this.currentItemIndex);
        } else if (delta < 0 && this.currentItemIndex > 0) {        
            if (this.currentItemIndex!==0){
            this.currentItemIndex--;
            this.scrollToProject(this.currentItemIndex);
            };        
        }
        setTimeout(() => {
            this.isScrolling = false;
            }, 150);
      },
      addScrollHandler() {
        if (!this.hasScrollHandler) {
            this.debouncedHandleScroll = this.debounce(this.handleScroll, 100);
            window.addEventListener('wheel', this.debouncedHandleScroll);
            this.hasScrollHandler = true;
        }
      },
      removeScrollHandler() {      
        if (this.hasScrollHandler) {
            window.removeEventListener('wheel', this.debouncedHandleScroll);
            this.hasScrollHandler = false;
        }
      }
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
.navbar {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #333;
}

.navbar li {
  float: left;
}

.navbar li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar li a:hover, .dropdown:hover .dropbtn {
  background-color: #111;
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.grid-projects{
    padding: 10vh 8vw;
    min-height: 90vh;
    align-items: start;
    background: linear-gradient(to bottom, rgb(30, 0, 255) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgb(30, 0, 255) 100%);
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
</style>