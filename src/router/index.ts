import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/Layout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/Contact.vue"),
      },
      {
        path: "/submenu1",
        name: "submenu1",
        component: () => import("@/views/SubMenu1.vue"),
      },
      {
        path: "/submenu2",
        name: "submenu2",
        component: () => import("@/views/SubMenu2.vue"),
      },
      {
        path: "/submenu3",
        name: "submenu3",
        component: () => import("@/views/SubMenu3.vue"),
      },
      {
        path: "/submenu4",
        name: "submenu4",
        component: () => import("@/views/SubMenu4.vue"),
      },
      {
        path: "/submenu5",
        name: "submenu5",
        component: () => import("@/views/SubMenu5.vue"),
      },
      {
        path: "/submenu6",
        name: "submenu6",
        component: () => import("@/views/SubMenu6.vue"),
      },
    ],
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
