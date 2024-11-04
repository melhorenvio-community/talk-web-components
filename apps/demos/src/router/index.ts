import content from "@/static/content.json";
import Home from "@/views/Home.vue";
import Stencil from "@/views/Stencil.vue";

import { createRouter, createWebHistory } from "vue-router";

const demos = content.examples.map((example) => ({
  path: `/demos/${example.id}`,
  name: `${example.category}-${example.id}`,
  component: () => import(`@/views/demos/${example.id}.vue`),
}));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    ...demos,

    {
      path: "/stencil",
      name: "stencil",
      component: Stencil,
    },
  ],
});

export default router;
