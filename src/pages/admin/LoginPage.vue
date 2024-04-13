<template>
  <q-dialog v-model="env.dialogs.login" @hide="onHide" persistent>
    <q-card class="w-full">
      <q-card-section>
        <div class="text-xl font-bold">Вход в системата</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="user.credentials.email"
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
            v-model="user.credentials.password"
            label="Вашата парола *"
            lazy-rules
            :rules="[
              (val) => !!val || 'Това поле е задължително!',
              (val) =>
                (val && val.length >= 6) ||
                'Паролата трябва да бъде поне 6 символа дълга.',
            ]"
          />

          <div class="text-slate-600">
            Полетата със звездичка (*) са задължителни.
          </div>

          <q-toggle
            v-model="user.credentials.remember"
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
              v-close-popup
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { useRouter } from "vue-router";
import { EnvStore } from "stores/env";
import { UserStore } from "stores/user";

export default {
  setup() {
    const router = useRouter();
    const env = EnvStore();
    const user = UserStore();

    const callbacks = {
      login() {
        env.dialogs.login = false;
      },
    };

    const functions = {
      onSubmit() {
        user.login(callbacks.login);
      },
      onReset() {
        console.log("Restart the login form.");
      },
      onHide() {
        router.push({ name: "dashboard" });
      },
    };

    return { env, user, ...functions };
  },
};
</script>
