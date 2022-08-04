<template>
  <main :class="{ hidden: !this.shouldDisplay }">
    <ul class="carousel" id="carousel">
      <li
        @click="onChange(item)"
        v-for="item in items"
        :key="item.id"
        class="carousel-item"
        :class="{ active: item.id === currentView }"
      >
        <nuxt-img v-bind:src="item.imgThumb" class="carousel-item-image" />
      </li>
    </ul>
  </main>
</template>

<script>
import { THUMBS, TONG_QUAN_THUMB } from "@/constants/data.js";
export default {
  props: {
    shouldDisplay: Boolean,
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

  methods: {
    onChange(view) {
      if (this.isAutoPlaying) this.$store.commit("stopAutoplay");
      return this.$store.commit("setView", view.id);
    },
  },
  watch: {
    currentMode: function (newVal) {
      this.items = THUMBS[newVal];
    },
  },
  data() {
    return {
      slider: undefined,
      items: TONG_QUAN_THUMB,
      carousel: { isDown: false },
    };
  },
  mounted() {
    this.slider = document.querySelector("#carousel");
    this.slider.addEventListener("mousedown", (e) => {
      this.slider.classList.add("active");
      this.carousel = {
        ...this.carousel,
        isDown: true,
        startX: e.pageX - this.slider.offsetLeft,
        scrollLeft: this.slider.scrollLeft,
      };
    });
    this.slider.addEventListener("mouseleave", () => {
      this.carousel = {
        ...this.carousel,
        isDown: false,
      };
      this.slider.classList.remove("active");
    });
    this.slider.addEventListener("mouseup", () => {
      this.carousel = {
        ...this.carousel,
        isDown: false,
      };
      this.slider.classList.remove("active");
    });
    this.slider.addEventListener("mousemove", (e) => {
      if (!this.carousel.isDown) return;
      e.preventDefault();
      const x = e.pageX - this.slider.offsetLeft;
      const walk = (x - this.carousel.startX) * 3;
      this.slider.scrollLeft = this.carousel.scrollLeft - walk;
    });
  },
};
</script>

<style>
main {
  display: flex;
  flex: 1;
  border: 1px solid burlywood;
  border-radius: 2px 2px 0 0;
}

ul li {
  margin-right: 16px;
}

ul li:last-child {
  margin-right: 0;
}

.carousel {
  flex: 1;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  transition: all 0.5s;
  transform: scale(0.98);
  will-change: transform;
  user-select: none;
  cursor: pointer;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 4px;
  margin: 0;
}

.carousel.active {
  cursor: grabbing;
  cursor: -webkit-grabbing;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  display: inline-flex;
  width: 128px;
  font-size: 0px;
  opacity: 0.5;
  height: 86px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  border: 2px solid #fff;
  border-radius: 4px;
}

.carousel-item:hover {
  opacity: 0.8;
}

.carousel-item.active {
  opacity: 1;
  transition: all 0.2s;
  padding: 0;
}

.carousel-item-image {
  margin: 0;
  width: fit-content;
  object-fit: fill;
  height: 100%;
}

.carousel-item-label {
  position: absolute;
  bottom: 4px;
}
</style>
