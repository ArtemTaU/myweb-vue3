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
          alignItems: 'center',
          gridTemplateColumns: this.columns,
          gap: '30px'
        };
      }
    }
  };
  </script>

<style scoped>
.grid-container {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 4fr; /* Вторая колонка в 2 раза шире первой */
    gap: 30px;
}
</style>