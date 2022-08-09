<template>
  <div class="viewer" id="viewer" />
</template>

<script>
import { Viewer, Animation } from "photo-sphere-viewer";
import { MarkersPlugin } from "photo-sphere-viewer/dist/plugins/markers";
import { VirtualTourPlugin } from "photo-sphere-viewer/dist/plugins/virtual-tour";
import { CompassPlugin } from "photo-sphere-viewer/dist/plugins/compass";
import { NODES, DEFAULT_LOCATION } from "@/constants/data.js";
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
      this.viewer.animate({
        ...DEFAULT_LOCATION[newVal],
        speed: "8rpm",
        zoom: 25,
      });
      setTimeout(() => {
        if (this.isAutoPlaying) {
          this.autoRotating();
        }
      }, 500);
    },
    currentMode: function (newVal) {
      if (newVal === "tong_quan") {
        this.compass?.show();
      } else if ((newVal = "tien_ich")) {
        this.compass?.hide();
      }
      this.$store.commit("setView", NODES[newVal][0].id);
      console.log(NODES[newVal]);
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
      const firstLocation = DEFAULT_LOCATION["view_chinh_du_an"];
      this.viewer.renderer.camera.far *= 2;
      new Animation({
        properties: {
          lat: { start: -Math.PI, end: firstLocation.latitude },
          long: { start: -Math.PI / 3, end: firstLocation.longitude },
          zoom: { start: 0, end: 25 },
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
        duration: 3000,
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
          duration: 15000,
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
            duration: 3000,
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
    onHoverMarker(id) {
      const elementId = id.replace("tour-link-", "");
      const timeEl = document.querySelector(`#${elementId}_time`);
      const contentEl = document.querySelector(`#${elementId}_content`);
      timeEl?.classList?.remove?.("active");
      contentEl?.classList?.add?.("active");
    },
    onLeaveMarker(id) {
      const elementId = id.replace("tour-link-", "");
      const timeEl = document.querySelector(`#${elementId}_time`);
      const contentEl = document.querySelector(`#${elementId}_content`);
      setTimeout(() => {
        timeEl?.classList?.add?.("active");
        contentEl?.classList?.remove?.("active");
      }, 3000);
    },
  },

  mounted() {
    this.viewer = new Viewer({
      container: document.querySelector("#viewer"),
      defaultLat: -0.5,
      defaultLong: 1.6,
      plugins: [
        MarkersPlugin,
        [CompassPlugin, { position: "top right", size: "96px" }],
        [
          VirtualTourPlugin,
          {
            dataMode: VirtualTourPlugin.MODE_CLIENT,
            positionMode: VirtualTourPlugin.MODE_MANUAL,
            renderMode: VirtualTourPlugin.MODE_MARKERS,
            nodes: NODES[this.currentMode],
            rotateSpeed: false,
          },
        ],
      ],
    });

    this.viewer.on("ready", () => {
      this.viewer.navbar.hide();
      this.tour = this.viewer.getPlugin(VirtualTourPlugin);
      this.compass = this.viewer.getPlugin(CompassPlugin);
      this.marker = this.viewer.getPlugin(MarkersPlugin);
      this.tour.on("node-changed", (e, nodeId, data) => {
        this.$store.commit("setView", nodeId);
      });
      this.marker.on("over-marker", (e, marker) => {
        this.onHoverMarker(marker.id);
      });
      this.marker.on("leave-marker", (e, marker) =>
        this.onLeaveMarker(marker.id)
      );

      this.viewer.on("click", () => this.$store.commit("stopAutoplay"));
      this.$store.commit("setView", NODES[this.currentMode][0].id);
      this.intro();
    });
    this.viewer.on("zoom-updated", (e, level) => {
      if (level >= 50) {
        this.viewer.zoom(50);
      }
    });
  },
};
</script>

<style>
i {
  color: #fff;
}

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
  overflow-y: hidden;
  overflow-x: hidden;
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
.marker-bubble-label {
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
  padding: 4px 32px;
  width: max-content;
  min-width: 192px;
  color: darkred;
  font-weight: bold;
}

.marker-banner-time {
  width: max-content;
  padding: 0 16px;
  background-color: rgb(119, 46, 11, 0.6);
  position: absolute;
  color: #fff;
  font-size: 13px;
  top: 36px;
  right: 0;
  opacity: 1;
  transition: all 0.5s;
}
.marker-banner-time.active {
  opacity: 0;
}

.marker-banner-content {
  position: absolute;
  background-color: rgb(255, 255, 255, 0.6);
  top: 32px;
  padding: 8px;
  color: rgb(119, 46, 11);
  font-weight: 500;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 0;
  transition: all 0.5s;
  opacity: 0;
}

.marker-banner-content.active {
  height: 256px;
  opacity: 1;
}

.marker-static {
  position: absolute;
  transform: translateX(-50%);
  width: max-content;
  color: darkred;
  background-color: rgb(238, 170, 16);
  font-size: 12px;
  padding: 8px 16px;
  font-weight: 500;
  border-bottom: 2px solid #fff;
}
.marker-song-co-chien {
  font-weight: 900;
  text-shadow: 2px 2px 4px #000000;
  color: #fff;
  -moz-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(15deg, 0deg);
  -webkit-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(15deg, 0deg);
  -o-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(15deg, 0deg);
  -ms-transform: scale(1) rotate(0deg) translate(0px, 0px) skew(15deg, 0deg);
  transform: scale(1) rotate(3deg) translate(0px, 0px) skew(15deg, 0deg);
}

.marker-duong-pho-co-dieu {
  font-weight: 900;
  text-shadow: 2px 2px 4px #000000;
  color: #fff;
  font-size: 18px;
  font-style: italic;
  transform: scale(1) rotate(-12deg) translate(0px, 0px);
}

.arrow {
  margin-right: -16px;
  vertical-align: middle;
  color: #000000;
  font-size: 36px;
  animation-name: color-transform;
  animation-iteration-count: infinite;
}

.arrow.one {
  animation-delay: 0;
  animation-duration: 1s;
}
.arrow.two {
  animation-delay: 0.25s;
  animation-duration: 1s;
}
.arrow.three {
  animation-delay: 0.5s;
  animation-duration: 1s;
}
.arrow.four {
  animation-delay: 0.75s;
  animation-duration: 1s;
}

@keyframes color-transform {
  from {
    color: rgb(238, 170, 16);
  }
  to {
    color: #000000;
  }
}

::-webkit-scrollbar {
  width: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(119, 46, 11, 0.8);
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(119, 46, 11);
}
</style>
