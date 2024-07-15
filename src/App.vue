<template>
  <navbar></navbar>
  <div  class="app">
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue";

export default {
  components: {
    Navbar,
  }
}

</script>

<style>
:root {
  --main-background-color: rgb(0, 0, 0);
  --main-color: rgba(245, 244, 244, 0.848);
  --main-box-inset-shadow: inset 0 0 10px 3px rgb(255 255 255 / 89%);
  --main-box-outset-shadow: 0 0 10px 3px rgb(255 255 255 / 89%);
  --base-font-size: 18px;
  --btn-font: 16px;
  --btn-font-mobile: 2vh;
  --hover-background-color: rgb(255 255 255 / 89%); 
  --hover-text-color: rgb(15, 15, 15);
  --bottom-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);  
  --p-font-size: 20px;
  --p-font-size-mobile: 2vh;
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--main-color);
  font-size: var(--base-font-size);
}

body {
  padding: 0;
  background-color: var(--main-background-color);
  background: linear-gradient(to bottom, rgb(30, 0, 255) 5%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgb(30, 0, 255) 100%);
  min-height: 100vh;
}


p {
  font-size: var(--p-font-size);
  color: var(--main-color);
  margin-top: 20px;
}

img {
    box-shadow: var(--main-box-outset-shadow);
}  

h1 {
  margin-top: 10px;
  font-size: 36px;
}

h2 {
  margin-top: 10px;
  font-size: 28px;
}

h3 {
  margin-top: 0px;
  font-size: 24px;
}

@media (max-width: 480px) {
  h2 {
    margin-top: 0px;
    font-size: 2.8vh;
  }
  h3 {
    margin-top: 0px;
    font-size: 2.5vh;
  }
  p {
    font-size: var(--p-font-size-mobile);
    margin-top: 15px;
  }
}

</style>