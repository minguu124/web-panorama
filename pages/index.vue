<template>
  <div id="app">
    <PanoramaViewer ref="panoramaViewer" />
    <ActionController />
    <HeaderButton />
    <nuxt-img src="/logo.png" class="logo" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
.logo {
  position: absolute;
  left: 8px;
  top: 16px;
  width: 128px;
  margin-left: 0px;
}
</style>
