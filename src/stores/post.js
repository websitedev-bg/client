import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const CategoryStore = defineStore("category", {
  state: () => ({
    loading: false,
    item: {},
    items: [],
    baseURL: "/posts",
  }),
  actions: {
    saveItem(cb) {
      this.loading = true;
      api
        .post(`${this.baseURL}`, this.item)
        .then((response) => {
          if (response.status !== 201 || response.status !== 200) {
            console.log(response.data);
            return;
          }

          if (cb) cb();
          this.getItems();
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    getItem(cb) {
      this.loading = true;
      api
        .get(`${this.baseURL}/${this.item.id}`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(response.data);
            return;
          }

          this.item = response.data.data;
          if (cb) cb();
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    getItems(cb) {
      this.loading = true;
      api
        .get(`${this.baseURL}`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(response.data);
            return;
          }

          this.items = response.data.data;
          if (cb) cb();
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    deleteItem(cb) {
      this.loading = true;
      api
        .delete(`${this.baseURL}/${this.item.id}`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(response.data);
            return;
          }

          if (cb) cb();
          this.getItems();
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
  },
});
