<template>
  <q-btn icon="menu" flat round @click="env.toggleLeftDrawer" />
  <div v-if="user.isLoggedIn" class="pr-5">
    Здравейте, {{ user.me.username }}!
    <q-btn flat fab-mini color="negative" icon="login" @click="logout" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";

import { UserStore } from "stores/user";
import { EnvStore } from "stores/env";

export default {
  setup() {
    const router = useRouter();
    const env = EnvStore();
    const user = UserStore();

    const callbacks = {
      logout() {
        router.push({ name: `login` }).then(() => callbacks.afterLogout());
      },
      afterLogout() {
        env.dialogs.login = true;
        env.drawers.left = false;
      }
    }

    const functions = {
      logout() {
        user.logout(callbacks.logout);
      }
    }

    return { env, user, ...functions };
  },
};
</script>
