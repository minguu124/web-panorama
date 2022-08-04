<template>
  <button v-on:click="this.onClick" class="header-button">
    <h1>TOÀN CẢNH DỰ ÁN</h1>
  </button>
</template>

<script>
import { NODES } from "@/constants/data.js";
export default {
  computed: {
    currentView() {
      return this.$store.state.currentView;
    },
    currentMode() {
      return this.$store.state.currentMode;
    },
  },
  methods: {
    onClick() {
      this.$store.commit("setView", NODES[this.currentMode][0].id);
      this.$store.commit("stopAutoPlay");
    },
  },
};
</script>

<style>
.header-button {
  position: absolute;
  top: 8px;
  padding: 8px;
  background-color: rgb(119, 46, 11);
  left: 50%;
  transform: translate(-50%);
  z-index: 10;
  color: white;
  border-collapse: separate;
  font-weight: 900;
  text-shadow: 2px 2px 4px #000000;
  border-radius: 16px;
  border: 1px solid transparent;
}

.header-button:hover {
  opacity: 0.8;
}
</style>
