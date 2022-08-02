<template>
  <div class="navbar">
    <ThumbCarousel :shouldDisplay="this.shouldDisplayCarousel" />
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
        <button
          class="menu_button"
          :class="{ active: currentMode === 'tong_quan' }"
          @click="onClickMode('tong_quan')"
        >
          Tổng quan
        </button>
        <button
          class="menu_button"
          :class="{ active: currentMode === 'tien_ich' }"
          @click="onClickMode('tien_ich')"
        >
          Tiện ích
        </button>
        <button class="menu_button">Căn hộ mẫu</button>
      </div>
      <button class="btn" @click="this.toggleAutoPlay">
        <i class="material-icons md-48" :class="{ active: this.isAutoPlaying }"
          >cameraswitch</i
        >
      </button>
      <button class="btn" @click="this.togglePlayAudio">
        <i class="material-icons md-48" v-if="this.shouldPlayAudio"
          >volume_up</i
        >
        <i v-if="!this.shouldPlayAudio" class="material-icons md-48"
          >volume_off</i
        >
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
  computed: {
    currentMode() {
      return this.$store.state.currentMode;
    },
    isAutoPlaying() {
      return this.$store.state.isAutoPlaying;
    },
  },
  methods: {
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
    togglePlayAudio() {
      this.shouldPlayAudio = !this.shouldPlayAudio;
    },
    onClickMode(mode) {
      this.$store.commit("setMode", mode);
    },
    toggleAutoPlay() {
      this.$store.commit("toggleAutoPlay");
    },
  },
  data() {
    return {
      container: null,
      audio: null,
      isFullscreen: false,
      shouldDisplayCarousel: true,
      shouldPlayAudio: true,
    };
  },
  watch: {
    shouldPlayAudio: function (val) {
      if (val) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
  },
  mounted() {
    this.container = document.getElementById("app");
    this.audio = new Audio("/sound.mp3");
    this.audio.addEventListener("canplaythrough", () =>
      this.audio.play().catch((e) =>
        window.addEventListener("click", () => this.audio.play(), {
          once: true,
        })
      )
    );
    this.audio.addEventListener("ended", () => this.play(), false);
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
  margin: 0 4px;
  padding: 2px;
  transition: all 0.2s;
}
.btn:hover {
  transform: scale(1.3);
}
img {
  width: 20%;
  margin-left: 4%;
}

.menu_button {
  text-align: center;
  border: 1px solid #fff;
  width: 30%;
  font-weight: 600;
  font-size: 14px;
  background-color: lightgrey;
  color: rgb(146, 100, 60);
  transition: all 0.2s;
  opacity: 0.9;
}
.menu_button:hover {
  transform: scale(1.1);
}

.menu_button.active {
  background-color: white;
  opacity: 1;
}

.action {
  padding: 16px;
  border: 1px solid burlywood;
}

i.active {
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
