<template>
  <q-dialog v-model="env.dialogs.login" persistent>
    <q-card class="w-full">
      <q-card-section>
        <div class="text-xl font-bold">Вход в системата</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="email"
            label="Имейл адрес *"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Въведете валиден имейл адрес',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="Вашата парола *"
            lazy-rules
            :rules="[
              (val) => (val >= 0 && val < 1) || 'Това поле е задължително!',
              (val) =>
                (val > 0 && val < 100) ||
                'Паролата не може да съдържа по-малко от 6 синвола.',
            ]"
          />

          <div class="text-slate-600">
            Полетата със звездичка (*) са задължителни.
          </div>

          <q-toggle
            v-model="remember"
            label="Искам системата да ме запомни, за определеното от административният панел време."
          />

          <div>
            <q-btn no-caps color="primary" label="Вход" type="submit" />
            <q-btn
              label="Чисто"
              type="reset"
              color="primary"
              flat
              no-caps
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat no-caps label="Вход" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
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
