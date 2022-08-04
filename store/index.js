export const state = () => ({
  isAutoPlaying: false,
  currentMode: "tong_quan",
  currentView: "view_chinh_du_an",
});

export const mutations = {
  setMode(state, mode) {
    state.currentMode = mode;
  },
  setView(state, view) {
    state.currentView = view;
  },

  toggleAutoPlay(state) {
    state.isAutoPlaying = !state.isAutoPlaying;
  },

  stopAutoplay(state) {
    state.isAutoPlaying = false;
  },
};
