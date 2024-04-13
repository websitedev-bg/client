<template>
  <q-page padding>
    <transition-group
      appear
      appear-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <h1 key="heading" class="text-2xl font-bold">Табло</h1>
      <div
        key="items"
        class="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        <q-item clickable v-ripple class="border rounded">
          <q-item-section>
            <div class="text-2xl font-bold">+5</div>
            <div>Нови потребители</div>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="group_add" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="border rounded">
          <q-item-section>
            <div class="text-2xl font-bold">40</div>
            <div>Всички потребители</div>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="group" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="border rounded">
          <q-item-section>
            <div class="text-2xl font-bold">20</div>
            <div>Статии</div>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="article" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="border rounded">
          <q-item-section>
            <div class="text-2xl font-bold">10</div>
            <div>Категории</div>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="category" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="border rounded">
          <q-item-section>
            <div class="text-2xl font-bold">4</div>
            <div>Нови статии</div>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="library_add" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple class="border rounded">
          <q-item-section>
            <div class="text-2xl font-bold">4</div>
            <div>Абонирани за бюлетин</div>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar icon="mail" />
          </q-item-section>
        </q-item>
      </div>
    </transition-group>
  </q-page>
</template>

<script>
export default {};
</script>
