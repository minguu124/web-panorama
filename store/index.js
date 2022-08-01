export const state = () => ({
  isSoundEnabled: true,
  currentMode: "tong_quan",
  currentView: "view_chinh_du_an",
});

export const mutations = {
  setMode(state, mode) {
    state.currentMode = mode;
    localStorage.setItem("currentMode", mode);
  },
  setView(state, view) {
    state.currentView = view;
    localStorage.setItem("currentView", view);
  },
  initializeState(state) {
    const currentMode = localStorage.getItem("currentMode");
    const currentView = localStorage.getItem("currentView");

    if (!currentMode) {
      state.currentMode = "tong_quan";
      localStorage.setItem("currentMode", "tong_quan");
    } else {
      state.currentMode = currentMode;
    }

    if (!currentView) {
      state.currentView = "view_chinh_du_an";
      localStorage.setItem("currentView", "view_chinh_du_an");
    } else {
      state.currentView = currentView;
    }
  },
};
