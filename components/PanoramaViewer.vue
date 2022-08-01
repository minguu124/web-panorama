<template>
  <div class="viewer" id="viewer" />
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
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
      tour: undefined,
    };
  },

  computed: {
    currentView() {
      return this.$store.state.currentView;
    },
    currentMode() {
      return this.$store.state.currentMode;
    },
  },

  watch: {
    currentView: function (newVal) {
      this.tour?.setCurrentNode(newVal);
    },
    currentMode: function (newVal) {
      this.tour?.setNodes(NODES[newVal]);
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
