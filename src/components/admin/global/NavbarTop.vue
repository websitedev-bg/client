<template>
  <q-btn icon="menu" flat round @click="env.toggleLeftDrawer" />
  <div class="pr-5">Здравейте, Криси!</div>
</template>

<script>
import { EnvStore } from "stores/env";

export default {
  setup() {
    const env = EnvStore();
    return { env };
  },
};
</script>
