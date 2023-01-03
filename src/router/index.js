import { createRouter, createWebHistory } from "vue-router";
import LogoEditorComponent from "../views/design/component/LogoEditorComponent.vue";
import ItemsPage from "../views/ItemsPage.vue";

import StampComponent from "../views/design/component/StampComponent.vue";
import MyTemplateComponent from "../views/design/component/MyTemplateComponent.vue";
import ViewProductList from "../views/products/ViewProductList.vue";
import ViewProductDetail from "../views/products/ViewProductDetail.vue";
import ViewSelectArea from "../views/products/ViewSelectArea.vue";
import ViewSelectFormat from "../views/products/ViewSelectFormat.vue";
import ViewSelectStamp from "../views/products/ViewSelectStamp.vue";
import ViewDesignLogo from "../views/products/ViewDesignLogo.vue";
import ViewSelectImage from "../views/products/ViewSelectImage.vue";
import ViewConfirmDesign from "../views/products/ViewConfirmDesign.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "ProductList",
      component: ViewProductList,
    },
    {
      path: "/product-detail",
      name: "product-detail",
      component: ViewProductDetail,
    },
    {
      path: "/select-area",
      name: "select-area",
      component: ViewSelectArea,
    },
    {
      path: "/select-format",
      name: "select-format",
      component: ViewSelectFormat,
    },
    {
      path: "/select-stamp",
      name: "select-stamp",
      component: ViewSelectStamp,
    },
    {
      path: "/select-image",
      name: "select-image",
      component: ViewSelectImage,
    },
    {
      path: "/confirm-design",
      name: "confirm-design",
      component: ViewConfirmDesign,
    },
    {
      path: "/design",
      name: "design",
      component: ViewDesignLogo,
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
