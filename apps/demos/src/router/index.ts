import Home from "@/views/Home.vue";
import Stencil from "@/views/Stencil.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/stencil",
      name: "stencil",
      component: Stencil,
    },
  ],
});

export default router;
