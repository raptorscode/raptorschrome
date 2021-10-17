import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("./Index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./About.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("./Contacts.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
