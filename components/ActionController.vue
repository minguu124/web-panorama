<template>
  <div class="navbar">
    <ThumbCarousel
      :items="this.currentGroup.items"
      :selected="this.currentView"
      :onChange="this.onChangeView"
    />
    <div class="action">
      <button @click="this.onFullscreen" class="btn">
        <i class="material-icons md-36">aspect_ratio</i>
      </button>
      <button class="btn">
        <i class="material-icons md-36">expand_circle_down</i>
      </button>
      <div class="menu_button_container">
        <button
          class="menu_button"
          v-for="item in data"
          :key="item.label"
          v-on:click="onChangeGroup(item)"
        >
          {{ item.label }}
        </button>
      </div>
      <button class="btn">
        <i class="material-icons md-36">cameraswitch</i>
      </button>
      <button class="btn">
        <i class="material-icons md-36">volume_up</i>
      </button>
    </div>
  </div>
</template>

<script>
import ThumbCarousel from "./ThumbCarousel.vue";
export default {
  components: {
    ThumbCarousel,
  },
  methods: {
    onChangeImage(value) {
      this.selectedImage = value;
      this.onChangeImageAction(value);
    },
    onFullscreen() {
      const elem = this.container;
      if (this.isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen();
        }
      } else {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE11 */
          elem.msRequestFullscreen();
        }
      }
      return (this.isFullscreen = !this.isFullscreen);
    },
  },
  data() {
    return {
      container: undefined,
      isFullscreen: false,
    };
  },
  props: {
    data: Object,
    currentGroup: Object,
    currentView: Object,
    onChangeGroup: Function,
    onChangeView: Function,
  },
  mounted() {
    this.container = document.getElementById("app");
  },
};
</script>

<style>
.navbar {
  position: absolute;
  bottom: 16px;
  width: 50%;
  max-width: 720px;
  min-width: 360px;
  background-color: rgb(146, 100, 60, 0.8);
  left: 50%;
  transform: translate(-50%);
  flex-direction: column;
  z-index: 10;
  border-radius: 4px;
}

.carousel_container {
  border: 1px solid burlywood;
  /* display: none; */
}

.menu_button_container {
  flex: 1;
  padding: 0 8px;
  justify-content: space-between;
}

.btn {
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: 24px;
  margin: 0px 8px;
}
img {
  width: 20%;
  margin-left: 4%;
}

.menu_button {
  text-align: center;
  vertical-align: middle;
  border: 1px solid #fff;
  height: 100%;
  width: 30%;
  font-weight: 600;
  font-size: 14px;
  background-color: lightgrey;
  color: rgb(146, 100, 60);
}
.menu_button:hover {
  background-color: white;
}

.action {
  padding: 16px;
  border: 1px solid burlywood;
}
</style>
