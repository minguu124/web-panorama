<template>
  <div class="viewer" id="viewer" />
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from "photo-sphere-viewer/dist/plugins/virtual-tour";
import { CompassPlugin } from "photo-sphere-viewer/dist/plugins/compass";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import "photo-sphere-viewer/dist/plugins/markers.css";
import "photo-sphere-viewer/dist/plugins/virtual-tour.css";
import "photo-sphere-viewer/dist/plugins/compass.css";

export default {
  expose: ["viewer"],
  props: {
    currentView: Object,
  },
  watch: {
    currentView: function (newVal, prevVal) {
      if (newVal === prevVal) return;
      this.tour.setCurrentNode(newVal.id);
    },
  },
  data() {
    return {
      viewer: typeof Viewer,
      tour: undefined,
      modifiers: { width: 6000, height: 3000, loading: "lazy" },
    };
  },

  mounted() {
    this.viewer = new Viewer({
      container: document.querySelector("#viewer"),
      defaultLat: -0.5,
      defaultLong: 1.6,
      plugins: [
        MarkersPlugin,
        [CompassPlugin, { position: "top right" }],
        [
          VirtualTourPlugin,
          {
            dataMode: VirtualTourPlugin.MODE_CLIENT,
            positionMode: VirtualTourPlugin.MODE_MANUAL,
            renderMode: VirtualTourPlugin.MODE_MARKERS,
            nodes: [
              {
                id: "view_chinh_du_an",
                panorama: this.$img(
                  "/360_view_chinh_du_an.webp",
                  this.modifiers
                ),
                links: [
                  {
                    nodeId: "view_biet_thu",
                    longitude: "56deg",
                    latitude: "-12deg",
                    markerStyle: {
                      scale: [1, 1.5, 2],
                      html: `
                      <div class="marker">
                        <div class="marker-stick">
                          <div class="marker-bubble">
                            <img class="marker-bubble-img" src="/icon_view_biet_thu.jpg"}/>
                          </div>
                          <div class="marker-label">View biệt thự</div>
                        </div>
                      </div>
                      `,
                    },
                  },
                  {
                    nodeId: "view_phu_du_an",
                    longitude: "54deg",
                    latitude: "-33.5deg",
                    markerStyle: {
                      scale: [1, 1.5, 2],
                      html: `
                      <div class="marker">
                        <div class="marker-stick">
                          <div class="marker-bubble">
                            <img class="marker-bubble-img" src="/icon_view_phu_du_an.jpg"}/>
                          </div>
                          <div class="marker-label">View phụ dự án</div>
                        </div>
                      </div>`,
                    },
                  },
                  {
                    nodeId: "trung_tam_vinh_long",
                    longitude: "100deg",
                    latitude: "-33.5deg",
                    markerStyle: {
                      scale: [1, 1.5, 2],
                      html: `
                      <div class="marker"><div class="marker-stick">
                        <div class="marker-banner">
                          <div class="marker-banner-icon">
                            <i class="material-icons md-36">expand_circle_down</i>
                          </div>
                          <div class="marker-banner-label">Trung tâm Vĩnh Long</div>
                        </div>
                      </div>
                      `,
                    },
                  },
                  {
                    nodeId: "cau_my_thuan",
                    longitude: "0deg",
                    latitude: "-33.5deg",
                    markerStyle: {
                      scale: [1, 1.5, 2],
                      html: `
                        <div class="marker"><div class="marker-stick">
                        <div class="marker-banner">
                          <div class="marker-banner-icon">
                            <i class="material-icons md-36">expand_circle_down</i>
                          </div>
                          <div class="marker-banner-label">Cầu Mỹ Thuận</div>
                        </div>
                      </div>
                      `,
                    },
                  },
                ],
              },
              {
                id: "view_phu_du_an",
                panorama: this.$img("/360_view_phu_du_an.webp", this.modifiers),
                links: [
                  {
                    nodeId: "view_chinh_du_an",
                    x: 1500,
                    y: 780,
                  },
                ],
              },
              {
                id: "view_biet_thu",
                panorama: this.$img("/360_view_biet_thu.webp", this.modifiers),
                links: [
                  {
                    nodeId: "view_chinh_du_an",
                    x: 1500,
                    y: 780,
                  },
                ],
              },
              {
                id: "cau_my_thuan",
                panorama: this.$img("/360_cau_my_thuan.webp", this.modifiers),
                links: [
                  {
                    nodeId: "view_chinh_du_an",
                    x: 1500,
                    y: 780,
                  },
                ],
              },
              {
                id: "trung_tam_vinh_long",
                panorama: this.$img(
                  "/360_trung_tam_vinh_long.webp",
                  this.modifiers
                ),
                links: [
                  {
                    nodeId: "view_chinh_du_an",
                    x: 1500,
                    y: 780,
                  },
                ],
              },
            ],
          },
        ],
      ],
    });

    this.viewer.on("ready", () => {
      this.viewer.navbar.hide();
      this.tour = this.viewer.getPlugin(VirtualTourPlugin);
    });
  },
};
</script>

<style>
.viewer {
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
}
.marker {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  position: absolute;
}
.marker-stick {
  width: 1px;
  height: 100px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  right: 3.5px;
}
.marker-bubble {
  width: 90px;
  height: 90px;
  position: absolute;
  bottom: 90px;
  right: -44px;
  border-radius: 45px;
  border: 2px solid rgb(238, 170, 16);
  outline: 12px solid rgb(255, 255, 255, 0.4);
  overflow: hidden;
  transition: all 0.25s;
}
.marker-bubble:hover {
  width: 140px;
  height: 140px;
  bottom: 116px;
  right: -69px;
  border-radius: 70px;
}
.marker-bubble-img {
  width: 100%;
  margin: 0;
}
.marker-label {
  padding: 4px 12px;
  position: absolute;
  width: max-content;
  transform: translateX(-50%);
  background-color: rgb(119, 46, 11);
  color: rgb(238, 170, 16);
  border-radius: 16px;
  font-weight: bold;
}

.marker-banner {
  display: flex;
  position: absolute;
  transform: translateX(-50%);
}

.marker-banner-icon {
  background-color: darkred;
  padding: 4px;
}

.marker-banner-label {
  background-color: #fff;
  padding: 4px 8px;
  width: max-content;
  color: darkred;
}

i {
  color: #fff;
}
</style>
