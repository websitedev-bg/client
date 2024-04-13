<template>
  <q-item clickable v-ripple @click="$router.push({ name: `dashboard` })">
    <q-item-section avatar>
      <q-icon name="dashboard" />
    </q-item-section>
    <q-item-section>Табло</q-item-section>
  </q-item>

  <q-expansion-item icon="group" label="Потребители">
    <q-card class="pl-5">
      <q-item clickable v-ripple @click="$router.push({ name: `users` })">
        <q-item-section avatar>
          <q-icon name="apps" />
        </q-item-section>
        <q-item-section>Всички</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `users`, params: { tab: `roles` } })"
      >
        <q-item-section avatar>
          <q-icon name="sync_alt" />
        </q-item-section>
        <q-item-section>Роли</q-item-section>
      </q-item>
    </q-card>
  </q-expansion-item>

  <q-expansion-item icon="article" label="Статии">
    <q-card class="pl-5">
      <q-item clickable v-ripple @click="$router.push({ name: `posts` })">
        <q-item-section avatar>
          <q-icon name="apps" />
        </q-item-section>
        <q-item-section>Всички</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `posts`, params: { tab: `draft` } })"
      >
        <q-item-section avatar>
          <q-icon name="edit_note" />
        </q-item-section>
        <q-item-section>Чернови</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `posts`, params: { tab: `active` } })"
      >
        <q-item-section avatar>
          <q-icon name="done" />
        </q-item-section>
        <q-item-section>Активни</q-item-section>
      </q-item>
    </q-card>
  </q-expansion-item>

  <q-expansion-item icon="auto_stories" label="Страници">
    <q-card class="pl-5">
      <q-item clickable v-ripple @click="$router.push({ name: `pages` })">
        <q-item-section avatar>
          <q-icon name="apps" />
        </q-item-section>
        <q-item-section>Всички</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `pages`, params: { tab: `draft` } })"
      >
        <q-item-section avatar>
          <q-icon name="edit_note" />
        </q-item-section>
        <q-item-section>Чернови</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `pages`, params: { tab: `active` } })"
      >
        <q-item-section avatar>
          <q-icon name="done" />
        </q-item-section>
        <q-item-section>Активни</q-item-section>
      </q-item>
    </q-card>
  </q-expansion-item>

  <q-expansion-item icon="category" label="Категории">
    <q-card class="pl-5">
      <q-item clickable v-ripple @click="$router.push({ name: `categories` })">
        <q-item-section avatar>
          <q-icon name="apps" />
        </q-item-section>
        <q-item-section>Всички</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="
          $router.push({ name: `categories`, params: { tab: `inactive` } })
        "
      >
        <q-item-section avatar>
          <q-icon name="block" />
        </q-item-section>
        <q-item-section>Неактивни</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `categories`, params: { tab: `active` } })"
      >
        <q-item-section avatar>
          <q-icon name="done" />
        </q-item-section>
        <q-item-section>Активни</q-item-section>
      </q-item>
    </q-card>
  </q-expansion-item>

  <q-expansion-item icon="mail" label="Имейл бюлетин">
    <q-card class="pl-5">
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `subscriptions` })"
      >
        <q-item-section avatar>
          <q-icon name="apps" />
        </q-item-section>
        <q-item-section>Абонирани</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="
          $router.push({
            name: `subscriptions`,
            params: { tab: `sended-emails` },
          })
        "
      >
        <q-item-section avatar>
          <q-icon name="mark_email_read" />
        </q-item-section>
        <q-item-section>Изпратени</q-item-section>
      </q-item>
      <q-item
        clickable
        v-ripple
        @click="
          $router.push({ name: `subscriptions`, params: { tab: `draft` } })
        "
      >
        <q-item-section avatar>
          <q-icon name="block" />
        </q-item-section>
        <q-item-section>Чернови</q-item-section>
      </q-item>
    </q-card>
  </q-expansion-item>

  <q-item clickable v-ripple @click="$router.push({ name: `services` })">
    <q-item-section avatar>
      <q-icon name="design_services" />
    </q-item-section>
    <q-item-section>Услуги</q-item-section>
  </q-item>

  <q-expansion-item icon="settings" label="Настройки">
    <q-card class="pl-5">
      <q-item
        clickable
        v-ripple
        @click="$router.push({ name: `settings` })"
      >
        <q-item-section avatar>
          <q-icon name="person" />
        </q-item-section>
        <q-item-section>Моят профил</q-item-section>
      </q-item>
    </q-card>
  </q-expansion-item>

  <q-item clickable v-ripple class="text-red-500">
    <q-item-section avatar>
      <q-icon name="logout" />
    </q-item-section>
    <q-item-section>Изход</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "SidebarItems",
  setup() {},
};
</script>
