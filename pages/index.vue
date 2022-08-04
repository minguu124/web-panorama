<template>
  <div id="app">
    <PanoramaViewer ref="panoramaViewer" />
    <ActionController />
    <HeaderButton />
    <ViewMap />
    <nuxt-img src="/logo.webp" class="logo" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
  top: 8px;
  width: 128px;
  margin-left: 0px;
}
</style>
