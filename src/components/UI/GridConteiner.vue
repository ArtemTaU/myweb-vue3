<template>
    <div :class="cssClass">
      <slot></slot>
    </div>   
  </template>
  
  <script>
  export default {
    name: 'my-grid-container',
    props: {
      cssClass: {
        type: String,
      },
    }
  };
  </script>

<style scoped>
</style>