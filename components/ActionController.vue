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
      <div style="flex: 1; justify-content: space-around">
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
        <i class="material-icons md-36">play_arrow</i>
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
  },
  data() {
    return {};
  },
  props: {
    data: Object,
    onFullscreen: Function,
    currentGroup: Object,
    currentView: Object,
    onChangeGroup: Function,
    onChangeView: Function,
  },
  mounted() {},
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
  z-index: 1000;
  border: 2px solid burlywood;
  border-radius: 4px;
}

.btn {
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: 24px;
}
img {
  width: 20%;
  margin-left: 4%;
}

.menu_button {
  flex: 0.3;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #fff;
  aspect-ratio: 5/1;
  font-weight: 600;
  font-size: 14px;
  background-color: lightgrey;
  color: rgb(146, 100, 60);
}
.menu_button:hover {
  background-color: white;
}

.action {
  align-items: center;
  justify-content: space-around;
  padding: 16px;
  border-top: 2px solid burlywood;
}
</style>
