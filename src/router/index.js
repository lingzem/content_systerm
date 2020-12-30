import { createRouter, createWebHistory } from "vue-router";
// 路由表
const routes = [];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
