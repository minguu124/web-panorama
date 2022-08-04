<template>
  <div class="map" :class="classObject">
    <nuxt-img src="/map.webp" class="map-image" />
    <button @click="onToggleExpand()" class="map-expand-button">
      <i v-if="!this.isExpand" class="material-icons md-24">zoom_out_map</i>
      <i v-if="this.isExpand" class="material-icons md-24">zoom_in_map</i>
    </button>
    <!-- <button class="map-zoom-in-button">
      <i class="material-icons md-48">zoom_in</i>
    </button>
    <button class="map-zoom-out-button">
      <i class="material-icons md-48">zoom_out</i>
    </button> -->
    <button
      v-for="item in items"
      @click="onClickDot(item)"
      class="dot"
      :class="{ active: item.id === currentView }"
      :style="{
        bottom: `${item.y}%`,
        left: `${item.x}%`,
      }"
    ></button>
  </div>
</template>

<script>
import { MAP_LOCATION } from "@/constants/data.js";
export default {
  computed: {
    currentView() {
      return this.$store.state.currentView;
    },
    currentMode() {
      return this.$store.state.currentMode;
    },
    classObject() {
      return {
        hidden: this.currentMode !== "tien_ich",
        active: this.isExpand,
      };
    },
  },
  methods: {
    onToggleExpand() {
      this.isExpand = !this.isExpand;
    },
    onClickDot(item) {
      this.$store.commit("setView", item.id);
    },
  },
  data() {
    return {
      isExpand: false,
      items: MAP_LOCATION,
    };
  },
};
</script>

<style>
.map {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40%;
  max-width: 360px;
  min-width: 120px;
  aspect-ratio: 4/3;
  background-color: rgb(119, 46, 11);
  z-index: 10;
  border-radius: 2px;
  overflow: hidden;
  border: 2px solid rgb(119, 46, 11);
  transition: all 0.5s;
}
.map.active {
  transform: scale(1.5) translateX(-16%) translateY(16%);
}

.map-image {
  width: 100%;
  margin: 0;
}

.map-expand-button {
  position: absolute;
  left: 12px;
  bottom: 4px;
}

/* .map-zoom-in-button {
  position: absolute;
  left: 12px;
  top: 4px;
}

.map-zoom-out-button {
  position: absolute;
  left: 12px;
  top: 24px;
} */

.dot {
  position: absolute;
  width: 3%;
  aspect-ratio: 1;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 0 4px #000;
}

.dot.active {
  background-color: rgb(238, 170, 16);
}
</style>
