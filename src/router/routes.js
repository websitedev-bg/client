const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/admin/DashboardPage.vue"),
      },
      {
        path: "users/:tab?",
        name: "users",
        component: () => import("pages/admin/UsersPage.vue"),
      },
      {
        path: "posts/:tab?",
        name: "posts",
        component: () => import("pages/admin/PostsPage.vue"),
      },
      {
        path: "pages/:tab?",
        name: "pages",
        component: () => import("pages/admin/PagePage.vue"),
      },
      {
        path: "categories/:tab?",
        name: "categories",
        component: () => import("pages/admin/CategoriesPage.vue"),
      },
      {
        path: "subscriptions/:tab?",
        name: "subscriptions",
        component: () => import("pages/admin/SubscriptionsPage.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("pages/admin/SettingsPage.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("pages/admin/LoginPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
