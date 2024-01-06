import { createRouter, createWebHashHistory } from "vue-router";
import GameView from "../views/GameView.vue";
import MainLayout from "../layouts/MainLayout.vue";

const routes = [
  {
    path: "/",
    meta: { layout: MainLayout },
    component: GameView,
  },
  {
    path: "/about",
    meta: { layout: MainLayout },
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
