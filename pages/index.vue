<template>
  <div id="app">
    <PanoramaViewer ref="panoramaViewer" />
    <ActionController />
  </div>
</template>

<script>
import PanoramaViewer from "@/components/PanoramaViewer.vue";
import ActionController from "@/components/ActionController.vue";
export default {
  name: "IndexPage",
  components: {
    PanoramaViewer,
    ActionController,
  },

  mounted() {
    this.$store.commit("initializeState");
  },
};
</script>

<style>
html,
div {
  display: flex;
}

img,
nuxt-image {
  pointer-events: none;
}

i {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
