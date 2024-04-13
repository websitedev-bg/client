<template>
  <q-btn icon="menu" flat round @click="env.toggleLeftDrawer" />
  <div v-if="user.isLoggedIn" class="pr-5">
    Здравейте, {{ user.me.username }}!
  </div>
  <div v-else>
    <q-btn flat fab icon="login" @click="$router.push({ name: `login` })" />
  </div>
</template>

<script>
import { UserStore } from "src/stores/user";
import { EnvStore } from "stores/env";

export default {
  setup() {
    const env = EnvStore();
    const user = UserStore();
    return { env, user };
  },
};
</script>
