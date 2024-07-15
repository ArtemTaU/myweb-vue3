<template>
    <nav>
      <ul class="navbarPrjcts">
        <li class="dropdown">
          <a class="dropbtn" >{{ currentItemName }}</a>
          <div class="dropdown-content">
            <a v-for="(item, index) in items" :key="index" @click.prevent="selectItem(index)">
              {{ item.name }}
            </a>
          </div>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    currentItemIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentItemName() {
      return this.items[this.currentItemIndex].name;
    },
  },
  methods: {
    changeCurrentItem(index) {      
      this.$emit('updateCurrentItem', index);
    },
    selectItem(index) {
      this.changeCurrentItem(index);
    },
  }
};
</script>

<style scoped>
.navbarPrjcts {
  position: fixed;
  z-index: 5;  
  list-style-type: none;
  padding: 0;
  right: 2vw;
  bottom: 2vh;
  background-color: var(--main-background-color);
  color: var(--main-color);  
  border-radius: 10px;
  box-shadow: 0 0 10px 3px rgb(88 88 88 / 73%);
}

.navbarPrjcts li {
  float: left;
}

.navbarPrjcts li a, .dropbtn {
  display: inline-block;
  color: var(--main-color);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  max-width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--p-font-size)
}

.navbarPrjcts li a:hover{
  background-color: var(--hover-background-color);
  color: var(--hover-text-color);
  border-radius: 10px;
  font-size: var(--p-font-size)
}


.dropdown:hover .dropbtn {
  background-color: #111;
  color: var(--text-color);
  border-radius: 10px;
  
}

.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--main-background-color);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  bottom: 100%;
  right: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px 3px rgb(88 88 88 / 73%);
}

.dropdown-content a {
  color: var(--hover-text-color);  
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-radius: 10px;
  width: 100%;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media (max-width: 480px) {
    .carousel-image {
        max-height: 30vh;
    }
    .carousel-image {
        border-radius: 10px;
    }
    .navbarPrjcts li a, .dropbtn {
      padding: 10px 10px;
      max-width: 150px;
      font-size: var(--p-font-size-mobile)
    }
    .navbarPrjcts li a:hover{
      font-size: var(--p-font-size-mobile)
    }
    .dropdown-content {
      min-width: 150px;
    }
}
</style>
