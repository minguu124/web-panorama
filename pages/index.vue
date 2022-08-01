<template>
  <div id="app">
    <nuxt-img src="/360_chinh_phu_du_an.jpg" class="hidden" />
    <nuxt-img src="/360_view_phu_du_an.jpg" class="hidden" />
    <nuxt-img src="/360_cau_my_thuan.jpg" class="hidden" />
    <nuxt-img src="/360_trung_tam_vinh_long.jpg" class="hidden" />
    <nuxt-img src="/360_view_biet_thu.jpg" class="hidden" />
    <PanoramaViewer ref="panoramaViewer" :currentView="this.selectedView" />
    <ActionController
      :data="this.data"
      :currentGroup="this.selectedGroup"
      :currentView="this.selectedView"
      :onChangeGroup="this.onChangeGroup"
      :onChangeView="this.onChangeView"
    />
  </div>
</template>

<script>
import PanoramaViewer from "@/components/PanoramaViewer.vue";
import ActionController from "@/components/ActionController.vue";
import { DATA } from "@/constants/data";
export default {
  name: "IndexPage",
  components: {
    PanoramaViewer,
    ActionController,
  },
  methods: {
    onChangeGroup(group) {
      this.selectedGroup = group;
    },

    onChangeView(view) {
      this.selectedView = view;
    },
  },
  data() {
    return {
      data: DATA,
      selectedGroup: DATA["tong_quan"],
      selectedView: DATA["tong_quan"].items[0],
    };
  },
  mounted() {
    this.$store.commit("initializeSound");
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
