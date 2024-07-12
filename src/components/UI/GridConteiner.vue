<template>
    <div :class="cssClass" :style="gridStyle">
      <slot></slot>
    </div>   
  </template>
  
  <script>
  export default {
    name: 'my-grid-container',
    props: {
      cssClass: {
        type: String,
        default: 'grid-container'
      },
      columns: {
        type: String,
        default: '1fr 1fr'
      }
    },
    computed: {
      gridStyle() {
        return {
          display: 'grid',
          gridTemplateColumns: this.columns,
          gap: '30px'
        };
      }
    }
  };
  </script>

<style scoped>
</style>