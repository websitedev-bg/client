import { defineStore } from "pinia";

export const EnvStore = defineStore("env", {
  state: () => ({
    drawers: {
      left: true,
    },
    dialogs: {
      login: false,
    },
  }),
  actions: {
    toggleLeftDrawer() {
      this.drawers.left = !this.drawers.left;
    },
  },
});
