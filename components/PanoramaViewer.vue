<template>
  <div class="viewer" id="viewer" />
</template>

<script>
import { Viewer, Animation } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from "photo-sphere-viewer/dist/plugins/virtual-tour";
import { CompassPlugin } from "photo-sphere-viewer/dist/plugins/compass";
import { NODES } from "@/constants/data.js";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import "photo-sphere-viewer/dist/plugins/markers.css";
import "photo-sphere-viewer/dist/plugins/virtual-tour.css";
import "photo-sphere-viewer/dist/plugins/compass.css";

export default {
  data() {
    return {
      viewer: typeof Viewer,
      tour: null,
      compass: null,
      autoplay1: null,
      autoplay2: null,
      autoplay3: null,
      marker: null,
    };
  },

  computed: {
    currentView() {
      return this.$store.state.currentView;
    },
    currentMode() {
      return this.$store.state.currentMode;
    },
    isAutoPlaying() {
      return this.$store.state.isAutoPlaying;
    },
  },

  watch: {
    currentView: function (newVal) {
      this.tour?.setCurrentNode(newVal);
      if (this.isAutoPlaying) {
        this.autoRotating();
      }
    },
    currentMode: function (newVal) {
      if (newVal === "tong_quan") {
        this.compass?.show();
      } else if ((newVal = "tien_ich")) {
        this.compass?.hide();
      }
      this.$store.commit("setView", NODES[newVal][0].id);
      this.tour?.setNodes(NODES[newVal]);
    },
    isAutoPlaying: function (val) {
      if (val) {
        this.autoRotating();
      } else {
        this.onClearRotating();
      }
    },
  },

  methods: {
    intro() {
      this.viewer.renderer.camera.far *= 2;
      new Animation({
        properties: {
          lat: { start: -Math.PI / 2, end: 0 },
          long: { start: Math.PI, end: 0 },
          zoom: { start: 0, end: 50 },
          fisheye: { start: 4, end: 0 },
        },
        duration: 2000,
        easing: "inOutQuad",
        onTick: (properties) => {
          this.viewer.setOption("fisheye", properties.fisheye);
          this.viewer.rotate({
            longitude: properties.long,
            latitude: properties.lat,
          });
          this.viewer.zoom(properties.zoom);
        },
      });
    },
    onClearRotating() {
      this.autoplay1?.cancel?.();
      this.autoplay2?.cancel?.();
      this.autoplay3?.cancel?.();
    },
    autoRotating() {
      const currentPosition = this.viewer.getPosition();
      const currentZoom = this.viewer.getZoomLevel();
      const currentNode = NODES[this.currentMode];

      const currentViewIndex = currentNode.findIndex(
        (x) => x.id === this.currentView
      );
      this.autoplay1 = new Animation({
        properties: {
          long: { start: currentPosition.longitude, end: Math.PI / 2 },
          lat: { start: currentPosition.latitude, end: 0 },
          zoom: { start: currentZoom, end: 10 },
        },
        duration: 2000,
        onTick: (properties) => {
          this.viewer.rotate({
            longitude: properties.long,
            latitude: properties.lat,
          });
          this.viewer.zoom(properties.zoom);
        },
      });
      this.autoplay1?.then((completed) => {
        this.autoplay1 = null;
        if (!completed) return;
        this.autoplay2 = new Animation({
          properties: {
            long: { start: Math.PI / 2, end: Math.PI * 2.5 },
            lat: { start: 0, end: 0 },
          },
          duration: 12000,
          onTick: (properties) => {
            this.viewer.rotate({
              longitude: properties.long,
              latitude: properties.lat,
            });
          },
        });
        this.autoplay2?.then((completed) => {
          this.autoplay2 = null;
          if (!completed) return;
          this.autoplay3 = new Animation({
            properties: {
              long: { start: Math.PI * 2.5, end: Math.PI * 2.5 },
              lat: { start: 0, end: -Math.PI / 2 },
            },
            duration: 2000,
            onTick: (properties) => {
              this.viewer.rotate({
                longitude: properties.long,
                latitude: properties.lat,
              });
            },
          });
          this.autoplay3?.then((completed) => {
            this.autoplay3 = null;
            if (!completed) return;
            if (currentViewIndex < currentNode.length - 1) {
              this.$store.commit(
                "setView",
                currentNode[currentViewIndex + 1]?.id
              );
            } else {
              this.$store.commit("setView", currentNode[0]?.id);
            }
          });
        });
      });
    },
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
            nodes: NODES["tong_quan"],
          },
        ],
      ],
    });

    this.viewer.on("ready", () => {
      this.viewer.navbar.hide();
      this.tour = this.viewer.getPlugin(VirtualTourPlugin);
      this.compass = this.viewer.getPlugin(CompassPlugin);
      this.marker = this.viewer.getPlugin(MarkersPlugin);
      this.viewer.on("click", () => {
        this.$store.commit("stopAutoplay");
      });

      this.$store.commit("setView", NODES["tong_quan"][0].id);
      this.intro();
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
