<template>
    <div class="projects-page">
        <div v-for="(project, index) in projects"> 
          <div v-if="index % 2 === 0">    
            <my-grid-container :columns="columsWidth(index)" cssClass="grid-projects">
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
            <my-grid-container :columns="columsWidth(index)" cssClass="grid-projects">
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

export default {
    components:{
        ImgCarousel
    },
    data() {
        return {
            projects: allProjects,
            technologies,
        } 
    },
    methods: {
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
    }
}
</script>

<style scoped>
.grid-projects{
    padding: 10vh 8vw;
    min-height: 90vh;
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