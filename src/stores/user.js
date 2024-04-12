import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const UserStore = defineStore("user", {
  state: () => ({
    loading: false,
    item: {},
    items: [],
    credentials: {},
    isLoggedIn: false,
    baseURL: "/users",
  }),
  actions: {
    login(cb) {
      this.loading = true;
      api
        .post(`${this.baseURL}/login`, this.credentials)
        .then((response) => {
          if (response.status !== 201) {
            console.log(response.data);
            return;
          }

          this.afterLogin(response.data);
          if (cb) cb();
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    afterLogin(token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      if (process.env.CLIENT) localStorage.setItem("token", token);
      this.isLoggedIn = true;
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
  },
});
