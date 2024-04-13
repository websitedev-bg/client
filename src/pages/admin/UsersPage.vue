<template>
  <q-page padding>
    <transition-group
      appear
      appear-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <h1 key="heading" class="text-2xl font-bold">Потребители</h1>
      <table key="items" class="border w-full border-collapse text-left mt-5">
        <thead>
          <tr class="border">
            <th class="border py-1 px-2">Имейл</th>
            <th class="border py-1 px-2">Потребителско име</th>
            <th class="border py-1 px-2">Малко Име</th>
            <th class="border py-1 px-2">Фамилия</th>
            <th class="border py-1 px-2">Град</th>
            <th class="border py-1 px-2 text-right">Опции</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in user.items" :key="index">
            <td class="border py-1 px-2">{{ item.email }}</td>
            <td class="border py-1 px-2">{{ item.username }}</td>
            <td class="border py-1 px-2">
              {{ item.options.first_name || "-" }}
            </td>
            <td class="border py-1 px-2">
              {{ item.options.last_name || "-" }}
            </td>
            <td class="border py-1 px-2">{{ item.options.city || "-" }}</td>
            <td class="border py-1 px-2 text-right">
              <q-btn flat fab-mini icon="edit" />
              <q-btn flat fab-mini icon="delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </transition-group>
  </q-page>
</template>

<script>
import { UserStore } from "src/stores/user";

export default {
  setup() {
    const user = UserStore();
    user.getItems();
    return { user };
  },
};
</script>
