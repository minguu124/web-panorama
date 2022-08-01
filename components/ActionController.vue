<template>
  <div class="navbar">
    <ThumbCarousel
      :shouldDisplay="this.shouldDisplayCarousel"
      :items="this.currentGroup.items"
      :selected="this.currentView"
      :onChange="this.onChangeView"
    />
    <div class="action">
      <button @click="this.onFullscreen" class="btn">
        <i v-if="!this.isFullscreen" class="material-icons md-48">fullscreen</i>
        <i v-if="this.isFullscreen" class="material-icons md-48"
          >fullscreen_exit</i
        >
      </button>
      <button class="btn" @click="this.toggleDisplayCarousel">
        <i v-if="!this.shouldDisplayCarousel" class="material-icons md-48"
          >arrow_circle_up</i
        >
        <i v-if="this.shouldDisplayCarousel" class="material-icons md-48"
          >arrow_circle_down</i
        >
      </button>
      <div class="menu_button_container">
        <button class="menu_button">Tổng quan</button>
        <button class="menu_button">Tiện ích</button>
        <button class="menu_button">Căn hộ mẫu</button>
      </div>
      <button class="btn">
        <i class="material-icons md-48">cameraswitch</i>
      </button>
      <button class="btn">
        <i class="material-icons md-48">volume_up</i>
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
      const el = this.container;
      if (this.isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      }
      return (this.isFullscreen = !this.isFullscreen);
    },
    toggleDisplayCarousel() {
      this.shouldDisplayCarousel = !this.shouldDisplayCarousel;
    },
  },
  data() {
    return {
      container: undefined,
      isFullscreen: false,
      shouldDisplayCarousel: true,
      audio: undefined,
      isPlayingAudio: true,
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
    this.audio = new Audio("/sound.mp3");
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
