import { createRouter, createWebHistory } from "vue-router";
import DesignView from "../views/design/DesignView.vue";
import ListPage from "../views/ListPage.vue";
import LogoEditorComponent from "../views/design/component/LogoEditorComponent.vue";
import LogoPage from "../views/LogoPage.vue";
import ItemsPage from "../views/ItemsPage.vue"

import StampComponent from "../views/design/component/StampComponent.vue";
import MyTemplateComponent from "../views/design/component/MyTemplateComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "ListPage",
      component: ListPage,
    },
    {
      path: "/logo-page",
      name: "LogoPage",
      component: LogoPage,
    },
    {
      path: "/design",
      name: "design",
      component: DesignView,
      children: [
        {
          path: "editor",
          name: "logo-editor",
          component: LogoEditorComponent,
        },
        {
          path: "stamp",
          name: "stamp",
          component: StampComponent,
        },
        {
          path: "my-template",
          name: "my-template",
          component: MyTemplateComponent,
        },

      ],
    },
    {
      path: "/items",
      name: "items-view",
      component: ItemsPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/logo",
      name: "logo",
      component: () => import("../views/LogoPage.vue"),
    },
  ],
});

export default router;
