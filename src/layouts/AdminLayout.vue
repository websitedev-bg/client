<template>
  <q-layout
    view="lHh Lpr lFf"
    class="transition-all"
    :class="env.dialogs.login ? `blur-md` : ``"
  >
    <q-header
      class="text-black bg-white border-b flex justify-between items-center"
    >
      <navbar-top />
    </q-header>

    <transition appear enter-active-class="animated fadeIn">
      <div v-show="user.isLoggedIn">
        <q-drawer v-model="env.drawers.left" show-if-above bordered>
          <q-list>
            <div class="text-xl my-5 text-center">Администрация</div>
            <sidebar-items />
          </q-list>
        </q-drawer>
      </div>
    </transition>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from "vue-router";

import { EnvStore } from "stores/env";
import { UserStore } from "stores/user";

import NavbarTop from "src/components/admin/global/NavbarTop.vue";
import SidebarItems from "src/components/admin/global/SidebarItems.vue";

export default {
  name: "AdminLayout",
  components: {
    "navbar-top": NavbarTop,
    "sidebar-items": SidebarItems,
  },
  setup() {
    const env = EnvStore();
    const user = UserStore();
    const router = useRouter();

    const token = JSON.parse(localStorage.getItem("token"));

    const callbacks = {
      getUser(response) {
        if (response.status !== 200) {
          user.logout();
        } else {
          router
            .push({ name: "dashboard" })
            .then(() => callbacks.afterNavigate());
        }
      },
      afterNavigate() {
        user.afterLogin(token);
        env.drawers.left = true;
      },
    };

    if (!token) {
      router.push({ name: "login" }).then(() => (env.dialogs.login = true));
    } else {
      user.saveAuthorizationHeader(token);
      user.getUser(callbacks.getUser);
    }

    return { env, user };
  },
};
</script>
