import { createStore } from "vuex";

export const globalStore = createStore({
  state: {
    previewUrl:
      "https://itemimg.goldwin.co.jp/itemimg/GDW01/A0GDW00013YV/01_001-750.jpg",
  },

  mutations: {
    setPreviewUrl(state, url) {
      state.previewUrl = url;
    },
  },
  getters: {
    getPreviewUrl(state) {
      return state.previewUrl;
    },
  },
});
