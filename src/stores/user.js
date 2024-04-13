import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const UserStore = defineStore("user", {
  state: () => ({
    loading: false,
    item: {},
    items: [],
    credentials: {
      email: "",
      password: "",
      remember: false,
    },
    me: {},
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

          this.afterLogin(response.data.data.token);
          this.me = response.data.data.user;
          if (cb) cb();
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    afterLogin(token) {
      this.saveAuthorizationHeader(token);
      if (process.env.CLIENT) localStorage.setItem("token", JSON.stringify(token));
      this.isLoggedIn = true;
      this.getUser();
    },
    saveAuthorizationHeader(token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
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
    getUser(cb) {
      this.loading = true;
      api
        .get(`${this.baseURL}`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(response.data);
            return;
          }

          this.me = response.data.data;
          if (cb) cb(response);
        })
        .catch((error) => {
          if (cb) cb(error);
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
    logout(cb) {
      if (process.env.CLIENT) localStorage.removeItem("token");
      this.me = {};
      this.isLoggedIn = false;
      delete api.defaults.headers.authorization;
      if (cb) cb();
    }
  },
});
