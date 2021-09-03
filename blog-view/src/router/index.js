import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "首页",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index.vue"),
  },
  {
    // path: "/login",
    path: "/",
    name: "登录",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
